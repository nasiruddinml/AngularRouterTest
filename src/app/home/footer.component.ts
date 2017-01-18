import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [ `
  .footer {
    position: relative;
    bottom: 0;
    height: 60px;
    background-color: #f5f5f5;
  }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
