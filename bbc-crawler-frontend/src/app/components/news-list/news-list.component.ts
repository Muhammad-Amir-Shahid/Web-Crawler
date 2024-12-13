import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-news-list',
  standalone:true,
  imports:[CommonModule, HttpClientModule, NewsService],
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {
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
