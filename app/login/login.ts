import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html'
})

export class Login {
  constructor(private authService: AuthService,
    private router: Router) { }
  erreur = 0;
  user = new User();

  onLoggedin() {
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser)
      this.router.navigate(['/']);
    else
      //alert('Login ou mot de passe incorrecte!');
      this.erreur = 1;
  }
}
