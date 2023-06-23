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

  constructor(private service: BlogService, private route: ActivatedRoute) {
    this.blogPost = {
      title: '',
      content: '',
      author: '',
      likes: 0,
      likedByMe: false,
      comments: [],
    };

    const id = this.route.snapshot.paramMap.get('id');
    if (typeof id == 'string') {
      this.service.getBlog(parseInt(id)).subscribe((response: BlogPost) => {
        this.blogPost = response;
      });
    }
  }
}
