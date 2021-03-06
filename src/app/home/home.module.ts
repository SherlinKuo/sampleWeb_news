import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NewsComponent } from '../components/news/news.component';
import { HeaderComponent } from '../components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FlexLayoutModule
  ],
  declarations: [HomePage, NewsComponent, HeaderComponent]
})
export class HomePageModule {}
