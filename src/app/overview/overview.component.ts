import { Component } from '@angular/core';
import { BlogService } from '../../service/blog.service';
import { BlogEntry } from 'src/interface/blog_entry.interface';

@Component({
  selector: 'app-root',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  title = 'blog-overview';
  blogEntries: BlogEntry[] = [];

  constructor(private service: BlogService) {
    this.service.getBlogs().subscribe((response: BlogEntry[]) => {
      this.blogEntries = response;
    });
  }

  toggleLike(blogEntryId: number) {
    // at the moment no write back to backend
    for (const entry of this.blogEntries) {
      if (entry.id == blogEntryId) {
        entry.likedByMe = !entry.likedByMe;
        if (entry.likedByMe) {
          entry.likes++;
        } else {
          entry.likes--;
        }
      }
    }
  }
}