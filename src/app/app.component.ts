import { Component } from '@angular/core';
import { Task } from "./task.module";
import { UUID } from "uuid-generator-ts"; //libreria de npm para generar ids en typescript

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoList-v1';
  h1Title = "Claudio's to-do list";
  
  tasks: Task[] = 
  [
    {id:"f967f5049ce8464d9c33130c451d8956", task:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.", completed:true}
  ];

  addTask = (task :string) => {
    task.trim().length > 0?this.tasks.unshift({id:(this.generateId()), task: task, completed:false}):console.error("You can't insert blank task");
    console.log(this.tasks);
  }

  deleteTask = (id :string) => {
    console.log(id);
    this.tasks = this.tasks.filter((findId) => findId.id != id);
  }

 generateId = () => {
  let uuid = new UUID();
  return uuid.getDashFreeUUID();
 }
}
