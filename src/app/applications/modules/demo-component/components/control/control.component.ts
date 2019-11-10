import { Component, OnInit } from '@angular/core';
import { TransferDataService } from '../../services/transfer-data.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  constructor(
    private transferDataService: TransferDataService
  ) { }

  public valueCpm1: number;
  public valueCpm2: number;

  ngOnInit() {
    this.transferDataService.getStateCmp1().subscribe(
      (data: number) => {
        this.valueCpm1 = data;
      }
    );
    this.transferDataService.getStateCmp2().subscribe(
      (data: number) => {
        this.valueCpm2 = data;
      }
    );
  }

}
