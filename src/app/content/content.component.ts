import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MdataService } from '../mdata.service';
import { fade, zoomOutMural } from '../animations';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [
    fade,
    zoomOutMural
  ]
})
export class ContentComponent implements OnInit {

  constructor(private mdata:MdataService) { }

  @Output() update = new EventEmitter();

  ngOnInit() {
  }

}
