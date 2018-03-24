import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.css']
})
export class Project2Component implements OnInit {
  visible = false;
  log = [];

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.visible = !this.visible;
    this.log.push(new Date());
  }

}
