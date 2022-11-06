import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusOperatorsService } from 'src/app/services/bus-operators.service';

@Component({
  selector: 'app-bus-operator-details',
  templateUrl: './bus-operator-details.component.html',
  styleUrls: ['./bus-operator-details.component.scss']
})
export class BusOperatorDetailsComponent implements OnInit {
  busOperator: any
  busOperatorDetails: any;

  constructor(
    private route: ActivatedRoute,
    private busOperatorsService: BusOperatorsService) { }

  ngOnInit() {
    this.getBusOperatorDetails();
  }

  getBusOperatorDetails() {
    const operator = this.route.snapshot.queryParamMap.get('name');
    this.busOperatorsService.fetchBusServices().subscribe((services: any) => {
      this.busOperator = services.operators.find((obj:any) => {
        return obj.name === operator;
      });
      this.busOperatorDetails = this.busOperator.routes;
    })
  }

  calculateStatus(deviation:number) {
    if ( deviation === 0 )
      return 'On time';
    else if ( deviation > 0 )
      return 'Late';
    else if ( deviation < 0 )
      return 'Early';
    else if ( deviation === null || undefined)
      return 'Unknown';
    else
      return 'Unknown'
  }

  saveNotes(name: string) {
    let notes = (<HTMLInputElement>document.getElementById('notes')).value;
    localStorage.setItem(name, notes);
  }

  getNotes(name: string) {
    return localStorage.getItem(name);
  }
}
