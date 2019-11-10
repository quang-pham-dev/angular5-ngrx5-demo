import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { TransferDataService } from '../../services/transfer-data.service';

@Component({
  selector: 'app-cpm1',
  templateUrl: './cpm1.component.html',
  styleUrls: ['./cpm1.component.scss']
})
export class Cpm1Component implements OnInit {

  constructor(
    private transferDataService: TransferDataService
  ) { }

  @Input() value: number;

  ngOnInit() {
  }
  sendData(num: number){
    this.transferDataService.setStateCmp2(num);
  }
}
