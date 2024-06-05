import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms' 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(contactForm:NgForm ) {
    console.log(contactForm.value ) ;
    }
}