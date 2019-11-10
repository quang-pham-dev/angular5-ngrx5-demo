import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PermissionGuard implements CanActivate, CanDeactivate<any> {
  constructor(
    private router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('permission')) {
      let permission;
      permission = JSON.parse(localStorage.getItem('permission'));
      if (state.url.indexOf('page1') !== -1) {
        if (permission.canActivate.page1) {
          return true;
        } else {
          alert('Can not access page1');
          this.router.navigateByUrl('/app/demo-guard/control');
          return false;
        }
      } else if (state.url.indexOf('page2') !== -1) {
        if (permission.canActivate.page2) {
          return true;
        } else {
          alert('Can not access page2');
          this.router.navigateByUrl('/app/demo-guard/control');
          return false;
        }
      } else if (state.url.indexOf('page3') !== -1) {
        if (permission.canActivate.page3) {
          return true;
        } else {
          alert('Can not access page3');
          this.router.navigateByUrl('/app/demo-guard/control');
          return false;
        }
      }
    } else {
      this.router.navigateByUrl('/app/demo-guard/control');
      return false;
    }
  }

  canDeactivate(current, state: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('permission')) {
      let permission;
      permission = JSON.parse(localStorage.getItem('permission'));
      if (state.routeConfig.path === 'page1') {
        if (permission.canDeactivate.page1) {
          return true;
        } else {
          alert('Can not leave page1');
          return false;
        }
      } else if (state.routeConfig.path === 'page2') {
        if (permission.canDeactivate.page2) {
          return true;
        } else {
          alert('Can not leave page2');
          return false;
        }
      } else if (state.routeConfig.path === 'page3') {
        if (permission.canDeactivate.page3) {
          return true;
        } else {
          alert('Can not leave page3');
          return false;
        }
      } else {
        alert('error');
      }
    } else {
      this.router.navigateByUrl('/app/demo-guard/control');
      return false;
    }
  }
}
