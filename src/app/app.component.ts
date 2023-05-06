import { Component, ViewChild } from '@angular/core';
import { todoListModel, TableBasicExample } from './model';
import { TodoInputComponent } from './components/todo-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'day32-workshop';

  todoList : todoListModel[]=[];

  @ViewChild(TodoInputComponent)
  todoComp !: TodoInputComponent

  displayInfo(todo: todoListModel) {
    console.info('>>>> todo: ', todo)
    this.todoList.unshift(todo)
  }

  deleteTask(idx: number) {
    this.todoList.splice(idx,1);
  }

}

