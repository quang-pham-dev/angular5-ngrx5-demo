import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appSidebar]'
})
export class SidebarDirective {

  constructor() { }
  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    document.querySelector('body').classList.toggle('sidebar-hidden');
  }

}
