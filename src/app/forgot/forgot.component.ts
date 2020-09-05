import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  public fbFormGroup = this.fb.group({
    Email: ['', Validators.required],
    Password: ['', Validators.required],
  });
  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) { }

  public InvalidCredential = false;

  async passwordReset() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:2001/updatepassword';
    const results: any = await this.http.post(url, data).toPromise();
    sessionStorage.setItem('sid', 'true');
    this.router.navigate(['AdminLogin']);
  }

  ngOnInit(): void {
  }

}
