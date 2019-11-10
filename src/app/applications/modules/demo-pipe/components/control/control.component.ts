import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  constructor() { }

  public demoUppercase: string;

  public arrayNum: Array<number>;

  ngOnInit() {
    this.arrayNum = [8, 4, 9, 2, 6, 2];
  }

}
