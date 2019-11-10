import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { TransferDataService } from '../../services/transfer-data.service';

@Component({
  selector: 'app-cpm2',
  templateUrl: './cpm2.component.html',
  styleUrls: ['./cpm2.component.scss']
})
export class Cpm2Component implements OnInit {

  constructor(
    private transferDataService: TransferDataService
  ) { }

  @Input() value: number;

  ngOnInit() {
  }
  
  sendData(num: number){
    this.transferDataService.setStateCmp1(num);
  }

}
