import { Comment } from './comment';

export interface Blog {
  author: string;
  comments: number | Comment[];
  content: string;
  contentPreview: string;
  createdAt: string;
  createdByMe: boolean;
  headerImageUrl: string;
  id: number;
  likedByMe: boolean;
  likes: number;
  title: string;
  updatedAt: string;
}
