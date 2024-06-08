import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms' 
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {



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