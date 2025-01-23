import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { BlogDetailComponent } from './blog-detail.component';
import { Blog } from '../../model/blog';
import { By } from '@angular/platform-browser';
import { AppState } from '../../services/redux/app-state';
import { Comment } from '../../model/comment';

describe('BlogDetailComponent', () => {
  let component: BlogDetailComponent;
  let fixture: ComponentFixture<BlogDetailComponent>;
  let mockBlog: Blog;
  let mockAppState: AppState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogDetailComponent);
    component = fixture.componentInstance;

    mockBlog = {
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
      comments: [
        {
          id: 1,
          content: 'Test content 1',
          author: 'Test Author',
          createdAt: '2025-01-23T20:52:35Z',
          updatedAt: '',
        },
      ],
      createdByMe: false,
    };

    mockAppState = {
      loading: false,
      blogs: undefined,
      blogDetail: mockBlog,
      pageTitle: '',
    };
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show blog content', () => {
    component.state.set(mockAppState);
    fixture.detectChanges();

    const contentElement = fixture.debugElement.query(
      By.css('[data-testid="blog-content"]'),
    );
    expect(contentElement.nativeElement.textContent).toContain(
      mockBlog.content,
    );
  });

  it('should format publishdate', () => {
    component.state.set(mockAppState);
    fixture.detectChanges();

    const publishDateElement = fixture.debugElement.query(
      By.css('[data-testid="blog-publishdate"]'),
    );
    expect(publishDateElement.nativeElement.textContent).toContain(
      '23.1.2025, 21:52:35',
    );
  });

  it('should show comments content', () => {
    component.state.set(mockAppState);
    fixture.detectChanges();

    const commentContentElement = fixture.debugElement.query(
      By.css('[data-testid="blog-comment-content"]:nth-of-type(1)'),
    );

    let comments: Comment[] = [];

    if (mockBlog.comments instanceof Array) {
      comments = mockBlog.comments;
    }

    expect(commentContentElement.nativeElement.textContent).toContain(
      comments[0].content,
    );
  });
});
