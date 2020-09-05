import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit {

  gotoPage(page) {
    this.router.navigate([page]);
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
