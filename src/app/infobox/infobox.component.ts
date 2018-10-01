import { Component, OnInit } from '@angular/core';
import { MdataService } from '../mdata.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { fade, slideToLeft, slideToRight } from '../animations';


@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.scss'],
  animations: [
    fade,
    slideToLeft,
    slideToRight
  ]
})
export class InfoboxComponent implements OnInit {

  constructor(public mdata:MdataService, _ActivatedRout:ActivatedRoute, private router:Router ) { }

  hotbox:any;

  onUpdate(item) {
    this.hotbox = item
  } 

  ngOnInit() {
    let fullRoute = this.router.url;
    let currentUrl = fullRoute.substr(6, fullRoute.length);
    this.onUpdate(currentUrl);
  }

}