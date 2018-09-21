import { Component } from '@angular/core';
import { MdataService } from './mdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sci-mural';

  constructor(private mdata:MdataService){}
}
