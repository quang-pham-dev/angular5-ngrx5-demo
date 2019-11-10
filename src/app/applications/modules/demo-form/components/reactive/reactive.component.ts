import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  constructor() { }

  public firstName: FormControl;
  public lastName: FormControl;
  public gender: FormControl;
  public address: FormControl;

  ngOnInit() {
    this.firstName = new FormControl('', [
      Validators.minLength(2),
      Validators.maxLength(20),
      Validators.required
    ]);
    this.lastName = new FormControl('', [
      Validators.minLength(2),
      Validators.maxLength(20),
      Validators.required
    ]);
    this.gender = new FormControl('', [
      Validators.required
    ]);
    this.address = new FormControl('', [
      Validators.minLength(10),
      Validators.maxLength(200),
      Validators.required
    ]);
  }

}
