import { REQUEST_STATUS } from 'types/RequestStatuses';
import { ArticleInterface } from 'types/ArticleInterface';

export interface State {
  articlesByTag: ArticleInterface[];
  status: REQUEST_STATUS;
}
