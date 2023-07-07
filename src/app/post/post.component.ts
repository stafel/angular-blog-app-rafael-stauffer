import { Component, inject } from '@angular/core';
import { BlogService } from '../../service/blog.service';
import {
  BlogPost,
  BlogPostCommentArrayZod,
} from '../../interface/blog_post.interface';
import { ActivatedRoute } from '@angular/router';
import { date, number } from 'zod';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  blogPost: BlogPost;
  isLoading: boolean;
  errorText: string;

  constructor(private service: BlogService, private route: ActivatedRoute) {
    this.blogPost = {
      title: '',
      content: '',
      author: '',
      likes: 0,
      likedByMe: false,
      comments: [],
    };

    this.isLoading = true;
    this.errorText = '';

    const id = this.route.snapshot.paramMap.get('id');
    if (typeof id == 'string') {
      this.service.getBlog(parseInt(id)).subscribe({
        next: (response: BlogPost) => {
          this.blogPost = response;
          this.isLoading = false;
        },
        error: (e) => (this.errorText = e.message),
        complete: () => console.info('complete'),
      });
    }
  }

  zebra(index: number): string {
    if (index % 2 === 1) {
      return 'zebra';
    }
    return '';
  }
}
