import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  public firstName: string;
  public lastName: string;
  public gender: string;
  public address: string;

  ngOnInit() {
    this.firstName = '';
    this.lastName = '';
    this.gender = '';
    this.address = '';
  }

}
