import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  {path:'info', component:InfoboxComponent, data: {index: 15}}
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{provide: 'mdata', useClass:MdataService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
