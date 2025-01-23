import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { BlogService } from './blog.service';
import { of } from 'rxjs';
import { Blogs } from '../model/blogs';
import { Blog } from '../model/blog';
import { AddBlog } from '../model/add-blog';

describe('BlogService', () => {
  let service: BlogService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  const apiUrl =
    'https://d-cap-blog-backend---v2.whitepond-b96fee4b.westeurope.azurecontainerapps.io';

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get', 'post']);

    TestBed.configureTestingModule({
      providers: [BlogService, { provide: HttpClient, useValue: spy }],
    });
    service = TestBed.inject(BlogService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch blogs via GET', () => {
    const dummyBlogs: Blogs = {
      data: [
        {
          id: 1,
          author: 'Test Author',
          comments: [],
          content: 'Test Content',
          contentPreview: 'Test Content Preview',
          createdAt: '2023-01-01',
          createdByMe: true,
          headerImageUrl: 'http://example.com/image.jpg',
          likedByMe: false,
          likes: 0,
          title: 'Test Blog',
          updatedAt: '2023-01-02',
        },
      ],
    };

    httpClientSpy.get.and.returnValue(of(dummyBlogs));

    service.loadBlogs().subscribe((blogs) => {
      expect(blogs).toEqual(dummyBlogs);
    });

    expect(httpClientSpy.get).toHaveBeenCalledWith(`${apiUrl}/entries`);
  });

  it('should fetch a single blog via GET', () => {
    const dummyBlog: Blog = {
      id: 1,
      author: 'Test Author',
      comments: [],
      content: 'Test Content',
      contentPreview: 'Test Content Preview',
      createdAt: '2023-01-01',
      createdByMe: true,
      headerImageUrl: 'http://example.com/image.jpg',
      likedByMe: false,
      likes: 0,
      title: 'Test Blog',
      updatedAt: '2023-01-02',
    };

    httpClientSpy.get.and.returnValue(of(dummyBlog));

    service.loadBlog(1).subscribe((blog) => {
      expect(blog).toEqual(dummyBlog);
    });

    expect(httpClientSpy.get).toHaveBeenCalledWith(`${apiUrl}/entries/1`);
  });

  it('should add a blog via POST', () => {
    const newBlog: AddBlog = {
      title: 'New Blog',
      content: 'New Content',
    };
    const dummyBlog: Blog = {
      id: 2,
      author: 'New Author',
      comments: [],
      content: 'New Content',
      contentPreview: 'New Content Preview',
      createdAt: '2023-01-01',
      createdByMe: true,
      headerImageUrl: 'http://example.com/image.jpg',
      likedByMe: false,
      likes: 0,
      title: 'New Blog',
      updatedAt: '2023-01-02',
    };
    const oidcToken = 'dummy-token';

    httpClientSpy.post.and.returnValue(of(dummyBlog));

    service.addBlog(newBlog, oidcToken).subscribe((blog) => {
      expect(blog).toEqual(dummyBlog);
    });

    expect(httpClientSpy.post).toHaveBeenCalledWith(
      `${apiUrl}/entries`,
      newBlog,
      jasmine.any(Object),
    );
  });
});
