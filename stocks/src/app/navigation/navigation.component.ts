import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm(): void {

  }

  search(): void {
  }

}
