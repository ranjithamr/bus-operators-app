import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BusOperatorComponent } from './components/bus-operator/bus-operator.component';
import { BusOperatorDetailsComponent } from './components/bus-operator-details/bus-operator-details.component';
import { BusOperatorsService } from './services/bus-operators.service';
import { BoldStringPipe } from './pipes/bold-string-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BusOperatorComponent,
    BusOperatorDetailsComponent,
    BoldStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BusOperatorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
