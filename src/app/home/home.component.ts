import { Component } from '@angular/core';

import { AppService } from './../app.service';
import { Todo } from './../Todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username:string;
  title = 'app';
  todos;
  todo:Todo;
  constructor(private service:AppService) { 
    this.todo=new Todo('','','');
    this.getTodoList();

  }


  getTodoList() {
    this.service.getTodoList().subscribe(
      todos => {
        this.todos = todos;
      },
      err => {
        console.log(err);
      }
    );
  }
 deleteTodo(id) {
   //this.todo=todo;
   //console.log(this.todo);
    this.service.deleteTodo(id).subscribe(
      todos => {
        console.log("Sucess");
        this.getTodoList();
      },
      err => {
        console.log(err);
      }
    );
  }
}

