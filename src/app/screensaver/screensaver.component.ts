import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, query, transition, style, stagger } from '@angular/animations';
import { infiniteFade } from '../animations';
import { MdataService } from '../mdata.service';
import { UserIdleService } from 'angular-user-idle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screensaver',
  templateUrl: './screensaver.component.html',
  styleUrls: ['./screensaver.component.scss'],
  animations: [
    infiniteFade
  ]
})
export class ScreensaverComponent implements OnInit {


  constructor(public mdata:MdataService, private userIdle: UserIdleService, private router: Router) { }

  state:any;
  picture:string;
  newTop:number;
  newLeft:number;

  randomPick(randomPath){
    this.picture = randomPath;
  }

  setNewPosition(w,h){
    let width = w - 500; //Remove box width
    let height = h - 500; //Remove box height
    
    let newPosLeft = Math.floor(Math.random()*width);
    let newPosTop = Math.floor(Math.random()*height);

    this.newLeft = newPosLeft;
    this.newTop = newPosTop;
        //console.log('T: ', newPosTop);
        //console.log('L: ', newPosLeft);
  }


  ngOnInit() {
    //Pick random image from the list below
    let items = ["H24", "H35", "H4", "H14", "S20", "S24"];
    let item = items[Math.floor(Math.random()*items.length)];
    let sourceData = this.mdata.descriptions[item].image_path;
    this.randomPick(sourceData);

    //Set random position that falls somewhere inside of the window size
    let vHeight = window.innerHeight;
    let vWidth = window.innerWidth;
      //console.log(vWidth + " x " + vHeight);
    this.setNewPosition(vWidth, vHeight);


    //SCREENSAVER RELOAD
    //Start screensaver.
    this.userIdle.startWatching();
    
    // Screensaver subscribe to idle and reload.
    this.userIdle.onTimerStart().subscribe(count => console.log(count));
    this.userIdle.ping$.subscribe(() => location.reload());
    //this.userIdle.onTimeout().subscribe(() => location.reload());
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
