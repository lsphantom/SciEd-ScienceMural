import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MdataService } from '../mdata.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private mdata:MdataService) { }

  @Output() update = new EventEmitter();

  ngOnInit() {
  }

}
