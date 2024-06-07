import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms' 
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {



  ngOnInit(): void {
  }

  onSubmit(contactForm:NgForm ) {
    console.log(contactForm.value ) ;
    }
    teamMembers: string[] = [''];

    constructor(private http: HttpClient) {}
  
    addMember() {
      this.teamMembers.push('');
    }
  
    removeMember(index: number) {
      this.teamMembers.splice(index, 1);
    }
}