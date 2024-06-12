import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }
    
    const userRole = this.authService.getUsername();
    console.log("user role:", userRole);
    const expectedRoles: string[] = route.data.expectedRoles;
    if (expectedRoles && !expectedRoles.includes(this.authService.getRole())) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
