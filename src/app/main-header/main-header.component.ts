import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  private firstName: string;
  private lastName: string;

  constructor(
    private router: Router
  ) {
    this.firstName = 'Chris';
    this.lastName = 'McKie';
  }

  showGreeting() {
    const row2 = document.getElementById('r1c2');
    row2.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName + '.';
  }

  resetGreeting() {
    const row2 = document.getElementById('r1c2');
    row2.innerHTML = 'r1c2';
  }

  ngOnInit() {
  }

navigateTo(path: string) {
  this.router.navigate([path]);
}

}
