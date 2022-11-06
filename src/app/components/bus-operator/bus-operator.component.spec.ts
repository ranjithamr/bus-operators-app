import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BusOperatorComponent } from './bus-operator.component';
import { HttpClient } from '@angular/common/http';

describe('BusOperatorComponent', () => {
  let component: BusOperatorComponent;
  let fixture: ComponentFixture<BusOperatorComponent>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusOperatorComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [ BusOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
