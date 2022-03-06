import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  maxAge: any;

  constructor() { }

  ngOnInit(): void {
    this.maxAge = new Date();
    this.maxAge.setFullYear(this.maxAge.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
