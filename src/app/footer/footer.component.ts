import { Component, OnInit } from '@angular/core';
import { fade, slideToLeft } from '../animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    fade,
    slideToLeft
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
