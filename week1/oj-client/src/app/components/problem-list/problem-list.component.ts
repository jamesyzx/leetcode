import { Component, OnInit } from '@angular/core';
import { Problem } from "../../models/problem.model";
const PROBLEMS: Problem[] = [{
  id:1,
  name:"haha",
  desc:"dwiqodioqjdoiq",
  difficulty:"essy"
}];

@Component({
  selector: 'app-problem-list',
  template: `
  <h1>hahah</h1>
 <div class="container">
    <div class="list-group">
    <a class="list-group-item" *ngFor="let problem of problems">
          <span>{{problem.id}}</span>
           <span>{{problem.name}}</span>
    <a>
    </div>
 </div>
  `,
  styles: []
})
export class ProblemListComponent implements OnInit {

  problems: Problem[];
  constructor() { }

  ngOnInit() {
    this.problems=PROBLEMS;
  }

}
