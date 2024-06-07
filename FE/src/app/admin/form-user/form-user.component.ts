
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(contactForm: NgForm) {
    console.log(contactForm.value);
  }
}