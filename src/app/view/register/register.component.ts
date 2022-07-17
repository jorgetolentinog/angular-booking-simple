import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly accountService: AccountService,
    private readonly router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      name: '',
      lastname: '',
      address: '',
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {}

  submit() {
    this.accountService
      .register(this.registerForm.value)
      .subscribe(() => {
        this.router.navigateByUrl('account/login');
      });
  }
}
