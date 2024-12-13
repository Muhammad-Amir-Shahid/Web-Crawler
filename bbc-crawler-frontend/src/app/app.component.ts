import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from './services/news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [ CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bbc-crawler-frontend';
  news: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.scrapeNews().subscribe((data: any[]) => {
      this.news = data;
    });
  }

  scrapeNews(): void {
    this.newsService.scrapeNews().subscribe(() => {
      this.ngOnInit();
    });
  }
}
