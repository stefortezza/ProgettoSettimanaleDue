import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Users } from 'src/interfaces/users';
import { Todo } from 'src/interfaces/todo';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  todos: Todo[] = [];
  users: Users[] = [];
  filteredTodos: Todo[] = [];
  searchUserName: string = '';

  constructor(private todosService: TodoService) {}

  ngOnInit(): void {
    this.todosService.getTodos().subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
        this.filteredTodos = todos;
      },
      error => {
        console.error('Errore durante il recupero dei todo:', error);
      }
    );

    this.todosService.getUsers().subscribe(
      (users: Users[]) => {
        this.users = users;
      },
      error => {
        console.error('Errore durante il recupero degli utenti:', error);
      }
    );
  }

  getUserById(userId: number): Users | undefined {
    return this.users.find(user => user.id === userId);
  }

  updateTodoStatus(todo: Todo): void {
    todo.completed = !todo.completed;
    this.todosService.updateTodoLocal(todo).subscribe(
      updatedTodo => {
        console.log('Todo aggiornato:', updatedTodo);
        const index = this.todos.findIndex(t => t.id === updatedTodo.id);
        if (index !== -1) {
          this.todos[index] = updatedTodo;
          const filteredIndex = this.filteredTodos.findIndex(td => td.id === updatedTodo.id);
          if (filteredIndex !== -1) {
            this.filteredTodos[filteredIndex] = updatedTodo;
          }
        }
      },
      error => {
        console.error('Errore durante l\'aggiornamento del todo:', error);
        todo.completed = !todo.completed;
      }
    );
  }
}
