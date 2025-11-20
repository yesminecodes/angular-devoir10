import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor (public authService: AuthService, private router: Router) {}
onLogout(){
this.authService.logout();
}
ngOnInit () { 
  let isloggedin: string; 
  let loggedUser:string; 
  isloggedin = localStorage.getItem('isloggedIn') !; 
  loggedUser = localStorage.getItem('loggedUser') !; 
  if (isloggedin!="true" || !loggedUser) 
      this.router.navigate(['/login']); 
  else 
   this.authService.setLoggedUserFromLocalStorage(loggedUser); 
}
}
