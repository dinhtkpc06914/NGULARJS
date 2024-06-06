import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(contactForm:NgForm ) {
    console.log(contactForm.value ) ;
    }
}
