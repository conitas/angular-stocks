import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDetailsComponent } from './stock-details.component';
import {Observable, of} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {StockService} from '../search/stock.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

class ActivatedRouteStub {
}

class StockServiceStub {
}

describe('StockDetailsComponent', () => {
  let component: StockDetailsComponent;
  let fixture: ComponentFixture<StockDetailsComponent>;
  let route: ActivatedRoute;
  let service: StockService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockDetailsComponent ],
      providers: [
        {provide: ActivatedRoute, useClass: ActivatedRouteStub},
        {provide: StockService, useClass: StockServiceStub},
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    route = TestBed.get(ActivatedRoute);
    service = TestBed.get(StockService);
    fixture = TestBed.createComponent(StockDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calling service to get stock info with passed path variable', () => {
  });


  it('should show not found message if no stock profile has been found', () => {}
  );
});
