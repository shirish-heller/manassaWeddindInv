import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImgSliderBgComponent} from './img-slider-bg/img-slider-bg.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgSliderBgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
