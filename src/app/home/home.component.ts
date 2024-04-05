import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Todo } from 'src/interfaces/todo';
import { Users } from 'src/interfaces/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  todos: Todo[] = [];
  filteredTodos: Todo[] = [];
  filteredTodosByUser: { [userId: number]: Todo[] } = {};
  users: Users[] = [];
  searchUserName: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
        this.filteredTodos = todos;

        this.users.forEach((user) => {
          this.filteredTodosByUser[user.id] = this.todos.filter(
            (todo) => todo.userId === user.id
          );
        });
      },
      (error) => {
        console.error('Error retrieving todos:', error);
      }
    );

    this.todoService.getUsers().subscribe(
      (users: Users[]) => {
        this.users = users;
      },
      (error) => {
        console.error('Error retrieving users:', error);
      }
    );
  }

  getUserById(userId: number): Users | undefined {
    return this.users.find((user) => user.id === userId);
  }

  searchTodos(): void {
    if (this.searchUserName.trim() === '') {
      this.filteredTodos = this.todos;
    } else {
      this.filteredTodos = this.todos.filter((todo) => {
        const user = this.getUserById(todo.userId);
        if (user) {
          return user.firstName
            .toLowerCase()
            .includes(this.searchUserName.toLowerCase());
        }
        return false;
      });
    }
  }

  resetSearch(): void {
    this.searchUserName = '';
    this.filteredTodos = this.todos;
  }

  updateTodoStatus(todo: Todo): void {
    todo.completed = !todo.completed;
  }
}
