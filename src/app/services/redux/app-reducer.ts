import { AppState, AppStateAction } from './app-state';

export function appReducer(state: AppState, action: AppStateAction): AppState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'BLOGS_LOADED':
      return { ...state, blogs: action.payload };
    case 'BLOG_DETAIL_LOADED':
      return { ...state, blogDetail: action.payload };
    case 'SET_PAGE_TITLE':
      return { ...state, pageTitle: action.payload };
    default:
      return state;
  }
}
