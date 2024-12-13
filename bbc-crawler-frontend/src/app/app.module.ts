import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsListComponent } from './components/news-list/news-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent, // Add here if not already present
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Required for API calls
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
