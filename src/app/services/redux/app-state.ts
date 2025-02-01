import { Blogs } from '../../model/blogs';
import { Blog } from '../../model/blog';

export type AppState = {
  // besser mit type alias arbeiten anstelle interfaces
  loading: boolean;
  blogs?: Blogs;
  blogDetail?: Blog;
  pageTitle: string;
};

// ich würde verschiedene States machen pro Page..  oder dann union types

export type AppStateAction = {
  type:
    | 'SET_LOADING'
    | 'BLOGS_LOADED'
    | 'BLOG_DETAIL_LOADED'
    | 'SET_PAGE_TITLE';
  payload: any;
};

export const initialState: AppState = {
  loading: false,
  blogs: undefined,
  blogDetail: undefined,
  pageTitle: 'Blogs',
};

// der App state gehört in die state.service.td Datei
