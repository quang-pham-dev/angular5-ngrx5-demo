import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  constructor() { }

  public interpolationBinding: string;

  public propertyBinding: string;

  public attributeBinding: string;

  public classBinding: string;

  public styleBinding: string;

  public isClick: boolean = false;

  public twowayBinding: string;

  ngOnInit() {
    this.interpolationBinding = 'Test Interpolation Binding';
    this.propertyBinding = './assets/img/heros/super-hero-color-face.png';
    this.attributeBinding = 'test';
    this.classBinding = 'test';
    this.styleBinding = '100px';
    this.twowayBinding = '';
  }

  clickButton(){
    this.isClick = !this.isClick;
  }
}
