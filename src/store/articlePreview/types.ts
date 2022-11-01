import { REQUEST_STATUS } from 'types/RequestStatuses';
import { ArticleInterface } from 'types/ArticleInterface';

export interface State {
  articlePreview: ArticleInterface;
  status: REQUEST_STATUS;
}
