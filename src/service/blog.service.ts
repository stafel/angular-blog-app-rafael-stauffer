import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogEntry } from '../interface/blog_entry.interface';

@Injectable({
    providedIn: 'root',
   })
export class BlogService{

    private readonly API_URL = 'https://d-cap-blog-backend.whitepond-b96fee4b.westeurope.azurecontainerapps.io/';
    private readonly ENDPOINT_BLOG_ENTRIES = '/entries';

    constructor(private readonly httpClient: HttpClient) { }

    getBlogs(): Observable<BlogEntry[]> {
        return this.httpClient.get<BlogEntry[]>(this.API_URL + this.ENDPOINT_BLOG_ENTRIES);
    }
}