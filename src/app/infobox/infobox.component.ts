import { Component, OnInit, Input } from '@angular/core';
import { MdataService } from '../mdata.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.scss']
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
