import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { StuffComponent } from './stuff/stuff.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RatingComponent } from './rating/rating.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    StuffComponent,
    WelcomeComponent,
    GalleryComponent,
    RatingComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'stuff', component: StuffComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'categories', component: CategoryComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ], { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
