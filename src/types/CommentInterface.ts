import { AuthorInterface } from 'types/AuthorInterface';

export interface CommentInterface {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: AuthorInterface;
}
