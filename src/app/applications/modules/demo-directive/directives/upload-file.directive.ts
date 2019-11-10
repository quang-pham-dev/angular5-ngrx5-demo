import {
  Directive,
  HostListener,
  Output,
  EventEmitter
} from '@angular/core';

@Directive({
  selector: '[appUploadFile]'
})
export class UploadFileDirective {

  constructor() { }

  @Output() onDropFile = new EventEmitter<File[]>();

  // Dragover Event
  @HostListener('dragover', ['$event'])
  public dragOver(event){
    event.stopPropagation();
    event.preventDefault();
  }

  // Dragleave Event
  @HostListener('dragleave', ['$event'])
  public dragLeave(event){
    event.stopPropagation();
    event.preventDefault();
  }

  // Drop Event
  @HostListener('drop', ['$event'])
  public dropFile(event){
    event.stopPropagation();
    event.preventDefault();
    if(event.dataTransfer.files.length > 0){
      this.onDropFile.emit(event.dataTransfer.files);
    }
  }

}
