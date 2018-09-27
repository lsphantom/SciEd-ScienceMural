import { Component, OnInit, Input } from '@angular/core';
import { MdataService } from '../mdata.service'; 
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({opacity:0})),
      transition(':enter, :leave', [
        animate(500)
      ])
    ]),

    trigger('slideToLeft', [
      state('void', style({transform: 'translateX(20px)'})),
      transition(':enter, :leave', [
        animate(500)
      ])
    ])
  ]
})
export class InfoboxComponent implements OnInit {

  @Input() index:number;

  constructor(private mdata:MdataService, _ActivatedRout:ActivatedRoute) { }

  hotbox:number;


  onUpdate(event) {
    this.hotbox = event.target.id
  } 

  ngOnInit() {
    this.hotbox = 0
    this.onUpdate(event)
  }

}
