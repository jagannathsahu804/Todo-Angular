import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() i!: number;
  //creating a event todoDelete like hover event
  @Output() todoDelete: EventEmitter <Todo> = new EventEmitter();//it goes to parent element now through the delete() function
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  Delete(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("Delete is been triggered");
  }
  onCheckboxClick(todo:Todo){
    this.todoCheckbox.emit(todo);
  }

}
