import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public fbFormGroup = this.fb.group(
    {
      Firstname: ['', Validators.required],
      Lastname: ['', Validators.required],
      Roles: ['', Validators.required],
      Country: ['', Validators.required],
      Username: ['', Validators.required],
      Password: ['', Validators.required],
      Email: ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]]
    })
  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) { };

  async RegisterProcess() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:2001/adduser';

    await this.http.post(url, data).toPromise();

    this.router.navigate(['AdminLogin']);
  };
  ngOnInit(): void {
  }
  gotoPage(page) {
    this.router.navigate([page]);
  }
}
