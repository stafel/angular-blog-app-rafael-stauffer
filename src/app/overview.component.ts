import { Component } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { BlogEntry } from 'src/interface/blog_entry.interface';

@Component({
  selector: 'app-root',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  title = 'blog-overview';

  constructor(private service: BlogService) { }

  getBlogs(): BlogEntry[] {
    this.service.getBlogs().subscribe((response: BlogEntry[]) => {
      console.log(response, 'res');
      return response;
    });
    return [];
  }
}