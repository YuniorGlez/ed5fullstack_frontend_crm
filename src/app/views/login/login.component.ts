import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = { email: "", password: "" }


  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.loginForm)
      .then(res => {
        console.log('Te logeaste muy bien manito');

      })
      .catch(e => {

      })
  }


}
