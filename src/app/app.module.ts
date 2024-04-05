import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CompletedComponent } from './completed/completed.component';
import { NotCompletedComponent } from './not-completed/not-completed.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'completed',
    component: CompletedComponent,
  },
  {
    path: 'notCompleted',
    component: NotCompletedComponent,
  },
  {
    path: "users",
    component: UsersComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CompletedComponent,
    NotCompletedComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
