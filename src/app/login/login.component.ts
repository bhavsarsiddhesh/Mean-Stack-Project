import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public InvalidCredential = false;

  public fbFormGroup = this.fb.group({
    Username: ['', Validators.required],
    Password: ['', Validators.required],
  });


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  gotoPage(page) {
    this.router.navigate([page]);
  }



  async loginprocess() {
    const data = this.fbFormGroup.value;

    const url = 'http://localhost:2001/authuser';
    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['Home']);
    } else {
      this.InvalidCredential = true;
    }
  }
};

