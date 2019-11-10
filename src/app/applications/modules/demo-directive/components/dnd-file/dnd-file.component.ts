import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnd-file',
  templateUrl: './dnd-file.component.html',
  styleUrls: ['./dnd-file.component.scss']
})
export class DndFileComponent implements OnInit {

  constructor() { }

  public files: File[];
  ngOnInit() {
    this.files = [];
  }

  onDropFile(event) {
    for (let i = 0; i < event.length; i++) {
      this.files.push(event[i]);
    }
  }
}
