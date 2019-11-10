import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  public dataToChild: string;

  public dataFromChild: string;

  ngOnInit() {
  }

  inputToChild(data: string){
    this.dataToChild = data;
  }

  getDataFromChild(event){
    this.dataFromChild = event;
  }

}
