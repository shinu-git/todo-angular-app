import { Injectable } from '@angular/core';



import { Http, Response, Headers, RequestOptions, URLSearchParams } 
from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

import { Todo } from './Todo';

@Injectable()
export class AppService {
 states;
 loading: boolean;
 private apiURL = 'http://localhost:8080/api/todo';
 private headers = new Headers({ 'Content-Type': 'application/json' });
 options: RequestOptions;
  constructor(private http:Http) {
    this.loading = false;
    this.states = [];
    
    this.options = new RequestOptions({ headers: this.headers });
   }
  ngOnInit(): void {
    
  }

  getTodoList(): Observable<Todo[]>  {
    return this.http.get(this.apiURL)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveTodo(todo): Observable<Todo[]>  {
    console.log(todo);
    return this.http.post(this.apiURL,todo)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  deleteTodo(id): Observable<Todo[]>  {
    console.log(id);
    return this.http.delete(this.apiURL+'/'+id,this.options)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private processResponse(res: any): Promise<Todo[]> {
    console.log('processResponse');
    
    res => res.json();
    console.log( res.json());
    return Promise.resolve(res);
  }


  
}
