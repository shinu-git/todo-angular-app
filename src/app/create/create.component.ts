import { Component, OnInit } from '@angular/core';

import { Todo } from './../Todo';
import { AppService } from './../app.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  todo: Todo;
  title:string;
  description:string;
  successMsg:string;
  success:boolean;
  error:boolean;
  errorMsg:string;
  constructor(private service:AppService) {
    this.todo= new Todo('','','');
    this.success=false;
    this.error=false;
    this.successMsg="Saved successfully!!";
    this.errorMsg="Server error";
   }

  ngOnInit() {
  }

  onSubmit() {
    
      //console.log("Form Submitted!"+this.todo.title+'  Desc'+this.todo.description);

      this.saveTodo(this.todo);
    
  }

  saveTodo(todo) {
  
    this.service.saveTodo(todo).subscribe(
      todo => {
       
       this.success=true;
       this.error=false;
      },
      err => {
        this.success=false;
        this.error=true;
        console.log(err);
      }
    );
  }

}
