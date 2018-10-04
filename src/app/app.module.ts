import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserIdleModule } from 'angular-user-idle';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { InfoboxComponent } from './infobox/infobox.component';
import { MdataService } from './mdata.service';
import { ScreensaverComponent } from './screensaver/screensaver.component';
import { MuralComponent } from './mural/mural.component';

const appRoutes: Routes = [
  {path:'', component:MuralComponent},
  {path:'screensaver', component:ScreensaverComponent},
  {path:'info/:id', component:InfoboxComponent}
] 


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    InfoboxComponent,
    MuralComponent,
    ScreensaverComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    UserIdleModule.forRoot({idle: 60, timeout: 5, ping: 15})
  ],
  providers: [{provide: 'mdata', useClass:MdataService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
