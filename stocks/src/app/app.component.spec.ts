import {TestBed, async, fakeAsync, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {routes} from './app.module';
import {CommonModule, LocationStrategy} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StockDetailsComponent} from './stock-details/stock-details.component';

describe('AppComponent', () => {
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        NavigationComponent,
        StockDetailsComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        CommonModule,
        ReactiveFormsModule,
        FormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.get(Router);
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
