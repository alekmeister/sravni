import { REQUEST_STATUS } from 'types/RequestStatuses';
import type { ArticleInterface } from 'types/ArticleInterface';

export interface State {
  articles: Array<ArticleInterface>;
  articlesCount: number;
  status: REQUEST_STATUS;
}
