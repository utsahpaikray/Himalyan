import { Component, inject, OnInit } from '@angular/core';
import { MarkdownParserService } from '../markdown-parser.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-mapper',
  templateUrl: './content-mapper.component.html',
  styleUrls: ['./content-mapper.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ContentMapperComponent implements OnInit {

  mappedContent: any;

  http = inject(HttpClient);
  markdownParser = inject(MarkdownParserService);

  ngOnInit() {
    this.http.get('assets/data/magnet.md', { responseType: 'text' })
      .subscribe(data => {
        this.mappedContent = this.markdownParser.parse(data);
      });
  }

}