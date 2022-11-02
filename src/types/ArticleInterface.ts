import { AuthorInterface } from 'types/AuthorInterface';

export interface ArticleInterface {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: AuthorInterface;
}

export type createNewArticle = Pick<ArticleInterface, 'title' | 'tagList' | 'description' | 'body'>;
