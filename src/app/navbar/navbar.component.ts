import { Component, OnInit } from '@angular/core';

var navbar = document.getElementById("navbar");

const ITEMS = [
  {name: 'antaragini'},
  {name: 'about'},
  {name: 'schedule'},
  {name: 'register'},
  {name: 'gallery'},
  {name: 'sponsors'}
]

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items = ITEMS;
  
  constructor() { }

  ngOnInit(): void {
  }
  myFunction() {
    var stick: number = navbar.offsetTop;
    if (window.pageYOffset  >= stick) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

}
