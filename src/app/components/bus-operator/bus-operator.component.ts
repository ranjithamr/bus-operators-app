import { Component, OnInit } from '@angular/core';
import { BusOperatorsService } from '../../services/bus-operators.service';

@Component({
  selector: 'app-bus-operator',
  templateUrl: './bus-operator.component.html',
  styleUrls: ['./bus-operator.component.scss']
})
export class BusOperatorComponent implements OnInit {
  operators: any;

  constructor(private busOperatorsService: BusOperatorsService) { }

  ngOnInit(): void {
    this.getBusOperators();
  }

  getBusOperators() {
    return this.busOperatorsService.fetchBusServices().subscribe((services: any) => {
      this.operators = this.sortOperatorsDescByDate(services.operators);
    })
  }

  sortOperatorsDescByDate(operators: any) {
    return operators.sort((date1:any, date2:any) => {
      date1 = date1.date.split('/').reverse().join('');
      date2 = date2.date.split('/').reverse().join('');
      return date2.localeCompare(date1);
    })
  }
}
