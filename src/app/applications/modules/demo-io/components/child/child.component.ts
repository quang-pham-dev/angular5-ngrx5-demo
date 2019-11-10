import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() dataFromParent: string;

  @Output() dataToParent = new EventEmitter<string>();

  ngOnInit() {
  }

  outputToParent(data: string){
    this.dataToParent.emit(data);
  }
}
