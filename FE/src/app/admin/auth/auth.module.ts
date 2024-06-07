import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthInterceptor } from "./auth.interceptor";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProfileComponent } from "./profile/profile.component";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthGuard, // Provide guard
    AuthService, // Provide service
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, // Provide interceptor
  ],
})
export class AuthModule {}
