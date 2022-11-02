import { REQUEST_STATUS } from 'types/RequestStatuses';
import { ArticleInterface } from 'types/ArticleInterface';

export interface State {
  createdArticle: ArticleInterface;
  status: REQUEST_STATUS;
}
