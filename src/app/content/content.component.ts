import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MdataService } from '../mdata.service';
import { fade, zoomOutMural } from '../animations';
import { UserIdleService } from 'angular-user-idle';
import { Router } from '@angular/router';


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

  constructor(public mdata:MdataService, private userIdle: UserIdleService, private router: Router) { }

  @Output() update = new EventEmitter();

  ngOnInit() {
    //Start watching for user inactivity.
    this.userIdle.startWatching();
    
    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count => console.log(count));
    
    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => this.router.navigate(['/screensaver']));
  }
 
  stop() {
    this.userIdle.stopTimer();
  }
 
  stopWatching() {
    this.userIdle.stopWatching();
  }
 
  startWatching() {
    this.userIdle.startWatching();
  }
 
  restart() {
    this.userIdle.resetTimer();
  }

}
