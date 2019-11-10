import {
  Component,
  OnInit
} from '@angular/core';

interface Permission {
  canActivate: {
    page1: boolean;
    page2: boolean;
    page3: boolean;
  },
  canDeactivate: {
    page1: boolean;
    page2: boolean;
    page3: boolean;
  }
}

declare let $: any;

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  constructor() { }

  public permission: Permission;
  public temp: Permission;

  ngOnInit() {
    if(!localStorage.getItem('permission')){
      localStorage.setItem(
        'permission',
        JSON.stringify({
          canActivate: {
            page1: false,
            page2: false,
            page3: false
          },
          canDeactivate: {
            page1: true,
            page2: true,
            page3: true
          }
        })
      );
    }
    this.permission = JSON.parse(localStorage.getItem('permission'));
    this.temp = JSON.parse(JSON.stringify(this.permission));
  }

  setPermission(){
    localStorage.removeItem('permission');
    localStorage.setItem('permission', JSON.stringify(this.permission));
    this.temp = JSON.parse(JSON.stringify(this.permission));
  }

  compare(): boolean{
    if(
      this.temp.canActivate.page1 === this.permission.canActivate.page1 &&
      this.temp.canActivate.page2 === this.permission.canActivate.page2 &&
      this.temp.canActivate.page3 === this.permission.canActivate.page3 &&
      this.temp.canDeactivate.page1 === this.permission.canDeactivate.page1 &&
      this.temp.canDeactivate.page2 === this.permission.canDeactivate.page2 &&
      this.temp.canDeactivate.page3 === this.permission.canDeactivate.page3
    ){
      return true;
    } else {
      return false;
    }
  }

}
