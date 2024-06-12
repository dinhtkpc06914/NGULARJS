import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(
      profile => {
        this.user = profile;
      },
      err => {
        console.log(err);
      }
    );
  }

  logout(): void {
    this.authService.logout();
  }
}
