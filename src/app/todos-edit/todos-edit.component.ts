import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { ToDo } from '../todo';
import { Router, ActivatedRoute } from '@angular/router';
import { ListContent } from '../listcontent';
import { Label } from '../label';

@Component({
  selector: 'app-todos-edit',
  templateUrl: './todos-edit.component.html',
  styleUrls: ['./todos-edit.component.css']
})
export class TodosEditComponent implements OnInit {

  id: number;
  todo: ToDo;

  todoForm = this.fb.group({
    name: ['', [Validators.required]],
    progress: ['NEW', [Validators.required]],
    listcontent: [''],
    labels: ['']
  });

  get name() { return this.todoForm.get('name'); }
  get complete() { return this.todoForm.get('complete'); }
  get progress() { return this.todoForm.get('progress'); }
  get listcontent() { return this.todoForm.get('listcontent'); }
  get labels() { return this.todoForm.get('labels'); }

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.todo = await this.todoService.getToDo(this.id);
    }
  }

  async onSubmit() {
    let todo = new ToDo();

    todo.name = this.name.value;
    todo.progress = this.progress.value;
    todo.labels = [new Label()];
    let listContent = new ListContent();
    todo.listcontent = [listContent];

    console.log(todo);

    let success = await this.todoService.addToDo(todo);
    if(success) {
      const url = '/todos';
      this.router.navigate([url])
    }

  }

}
