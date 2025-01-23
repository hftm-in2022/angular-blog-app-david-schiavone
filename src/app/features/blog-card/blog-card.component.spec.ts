import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogCardComponent } from './blog-card.component';
import { Blog } from '../../model/blog';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

describe('BlogCardComponent', () => {
  let component: BlogCardComponent;
  let fixture: ComponentFixture<BlogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCardComponent, RouterModule.forRoot([])], // BlogCardComponent hier importieren
    }).compileComponents();

    fixture = TestBed.createComponent(BlogCardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the blog title', () => {
    const mockBlog: Blog = {
      id: 1,
      title: 'Test Blog Title',
      content: 'This is a test blog content',
      contentPreview: 'This is a test blog content preview',
      author: 'Test Author',
      createdAt: '2025-01-23T20:52:35Z',
      updatedAt: '2025-01-23T20:52:35Z',
      headerImageUrl: 'https://example.com/image.jpg',
      likes: 42,
      likedByMe: false,
      comments: 10,
      createdByMe: false,
    };
    component.blog = mockBlog;

    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(
      By.css('[data-testid="title"]'),
    );
    expect(titleElement.nativeElement.textContent).toContain(mockBlog.title);
  });

  it('should display the header image', () => {
    const mockBlog: Blog = {
      id: 1,
      title: 'Test Blog Title',
      content: 'This is a test blog content',
      contentPreview: 'This is a test blog content preview',
      author: 'Test Author',
      createdAt: '2025-01-23T20:52:35Z',
      updatedAt: '2025-01-23T20:52:35Z',
      headerImageUrl: 'https://example.com/image.jpg',
      likes: 42,
      likedByMe: true,
      comments: 10,
      createdByMe: false,
    };
    component.blog = mockBlog;

    fixture.detectChanges();

    const imageElement = fixture.debugElement.query(
      By.css('[data-testid="header-image"]'),
    );
    expect(imageElement.nativeElement.src).toBe(mockBlog.headerImageUrl);
  });

  it('should display content preview', () => {
    const mockBlog: Blog = {
      id: 1,
      title: 'Test Blog Title',
      content: 'This is a test blog content',
      contentPreview: 'This is a test blog content preview',
      author: 'Test Author',
      createdAt: '2025-01-23T20:52:35Z',
      updatedAt: '2025-01-23T20:52:35Z',
      headerImageUrl: 'https://example.com/image.jpg',
      likes: 42,
      likedByMe: true,
      comments: 10,
      createdByMe: false,
    };
    component.blog = mockBlog;

    fixture.detectChanges();

    const previewElement = fixture.debugElement.query(
      By.css('[data-testid="blog-preview"]'),
    );
    expect(previewElement.nativeElement.textContent).toContain(
      mockBlog.contentPreview,
    );
  });
});
