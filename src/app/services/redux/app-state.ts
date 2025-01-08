import { Blogs } from '../../model/blogs';
import { Blog } from '../../model/blog';

export interface AppState {
  loading: boolean;
  blogs?: Blogs;
  blogDetail?: Blog;
}

export interface AppStateAction {
  type: 'SET_LOADING' | 'BLOGS_LOADED' | 'BLOG_DETAIL_LOADED';
  payload: any;
}

export const initialState: AppState = {
  loading: false,
  blogs: undefined,
  blogDetail: undefined,
};
