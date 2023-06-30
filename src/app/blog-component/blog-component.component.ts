import { Component, Input } from '@angular/core';
import { BlogEntry } from 'src/interface/blog_entry.interface';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.scss'],
})
export class BlogComponentComponent {
  @Input() blogEntry!: BlogEntry;
}
