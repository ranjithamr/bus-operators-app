import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BusOperatorDetailsComponent } from './bus-operator-details.component';

describe('BusOperatorComponent', () => {
  let component: BusOperatorDetailsComponent;
  let fixture: ComponentFixture<BusOperatorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusOperatorDetailsComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [ BusOperatorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusOperatorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
