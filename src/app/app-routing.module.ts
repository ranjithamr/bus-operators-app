import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusOperatorComponent } from './components/bus-operator/bus-operator.component';
import { BusOperatorDetailsComponent } from './components/bus-operator-details/bus-operator-details.component';

const routes: Routes = [
  { path: '', component: BusOperatorComponent },
  { path: 'bus-operators-list', component: BusOperatorComponent},
  { path: 'bus-operator-details', component: BusOperatorDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
