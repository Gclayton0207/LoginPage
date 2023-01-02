import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router, private service: UserService) {}
  ngOnInit(): void {}
  respdata: any;

  RedirectLogin() {
    this.router.navigate(['login']);
  }
  reactiveForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    password: new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required),
  });

  saveUser() {
    if (this.reactiveForm.valid) {
      this.service.Registration(this.reactiveForm.value).subscribe((item) => {
        this.respdata = item;
        
        this.RedirectLogin()

      });
    }
  }
}
