import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToDo } from '../todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Input() todo: ToDo;
  @Input() showStatus = false;
  @Output() save = new EventEmitter<ToDo>();

  todoForm = this.fb.group({
    name: ['', [Validators.required]],
    progress: ['NEW', [Validators.required]],
    listcontent: [[]],
    labels: [[]]
  });

  get name() { return this.todoForm.get('title'); }
  get complete() { return this.todoForm.get('complete'); }
  get progress() { return this.todoForm.get('progress'); }
  get listcontent() { return this.todoForm.get('listcontent'); }
  get labels() { return this.todoForm.get('labels'); }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    if(this.todo != null) {
      console.log("not null");
    }
    console.log(this.todo);
  }

  ngOnChanges() {
    this.todoForm.patchValue(this.todo);
  }

  onSubmit() {
    this.save.emit(
      Object.assign(new ToDo(), this.todoForm.value)
    );
  }

}
