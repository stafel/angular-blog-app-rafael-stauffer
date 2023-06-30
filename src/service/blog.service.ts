import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import {
  BlogEntry,
  BlogEntryZod,
  BlogEntryArrayZod,
} from '../interface/blog_entry.interface';
import { z } from 'zod';
import { BlogPost, BlogPostZod } from 'src/interface/blog_post.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private readonly API_URL =
    'https://d-cap-blog-backend.whitepond-b96fee4b.westeurope.azurecontainerapps.io/';
  private readonly ENDPOINT_BLOG_ENTRIES = '/entries';

  constructor(private readonly httpClient: HttpClient) {}

  getBlogs(): Observable<BlogEntry[]> {
    return this.httpClient
      .get(this.API_URL + this.ENDPOINT_BLOG_ENTRIES)
      .pipe(map((response) => BlogEntryArrayZod.parse(response)));
  }

  getBlog(id: number): Observable<BlogPost> {
    return this.httpClient
      .get(this.API_URL + this.ENDPOINT_BLOG_ENTRIES + '/' + id.toString())
      .pipe(map((response) => BlogPostZod.parse(response)));
  }
}
