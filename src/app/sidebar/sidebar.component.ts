import { Component, OnInit } from '@angular/core';
import { slideToRight, fade } from '../animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    fade,
    slideToRight
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
