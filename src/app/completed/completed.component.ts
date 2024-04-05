import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Todo } from 'src/interfaces/todo';
import { Observable, map } from 'rxjs';
import { Users } from 'src/interfaces/users';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
  todos!: Todo[];

  users$!: Observable<Users[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getPosts().subscribe((todos) => {
      this.todos = todos.filter((todo) => todo.completed === true);
    });

    this.users$ = this.todoService.getUsers();
  }

  getUserName(userId: number): Observable<string> {
    return this.users$.pipe(
      map((users) => {
        const user = users.find((u) => u.id === userId);
        return user
          ? `${user.firstName} ${user.lastName}`
          : 'Utente non trovato';
      })
    );
  }

  toggleCompleted(todo: Todo): void {
    todo.completed = !todo.completed;
  }
}
