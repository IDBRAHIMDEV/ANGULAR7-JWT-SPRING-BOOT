import { AccountService } from './../../services/account.service';
import { TokenService } from './../../services/token.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)])
  });

  constructor(
      private authService: AuthService,
      private token: TokenService,
      private account: AccountService,
      private router: Router,
      private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }

  signIn() {
    this.authService.login(this.loginForm.value)
        .subscribe(
          res => this.handleResponse(res),
          err => this.toastr.error(
              `Erreur`,
              'Merci de Vérifier votre email ou mot de passe !',
              {
                timeOut: 3000,
                positionClass: 'toast-bottom-left'
              }
          ))
  }

  handleResponse(data) {
    this.token.handle(data);
    this.account.changeAuthStatus(true);
    this.toastr.success(
      `Bienvenu : ${ this.token.getInfos().name }`,
      'Vous êtes connectés !',
      {
        timeOut: 3000,
        positionClass: 'toast-bottom-left'
      }
    );
    this.router.navigateByUrl('/');
  }

}
