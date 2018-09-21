import { Component, OnInit, Input } from '@angular/core';
import { MdataService } from '../mdata.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.scss']
})
export class InfoboxComponent implements OnInit {

  @Input('i') index:number;

  constructor(private mdata:MdataService, _ActivatedRout:ActivatedRoute) { }

  hotbox:number;


  ngOnInit() {
    this.hotbox = 9
  }

}
