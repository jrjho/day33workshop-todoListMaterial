import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { todoListModel } from '../model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit{

  todoForm !: FormGroup
  todoArray!: FormArray

  todoList : todoListModel[]=[];
  
  @Output()
  onSubmitTodoList = new Subject<todoListModel>()

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.todoForm = this.createForm()
  }

  addTask() {
    const submitted = this.todoForm.value as todoListModel
    this.onSubmitTodoList.next(submitted)
    console.info('>>>> submitted: ', submitted)
    // console.info('>>>> onSubmitTodoList: ', this.onSubmitTodoList.next(submitted))
    this.ngOnInit()
  }

  private createForm(): FormGroup {
    this.todoArray = this.formBuilder.array([])
    return this.formBuilder.group({
      description: this.formBuilder.control<string>('', [Validators.required]),
      dueDate: this.formBuilder.control<string>('', [Validators.required]),
      priority: this.formBuilder.control<string>('Low', [ Validators.required]),
      taskAddedArray: this.todoArray
    })
  }

  hasError(cn: string): boolean {
    return !!(this.todoForm.get(cn)?.invalid && this.todoForm.get(cn)?.dirty)
  }

  deleteTask(idx: number) {
    this.todoArray.removeAt(idx)
  }


}
