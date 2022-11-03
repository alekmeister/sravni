import { REQUEST_STATUS } from 'types/RequestStatuses';
import type { ArticleInterface } from 'types/ArticleInterface';

export interface State {
  articlePreview: ArticleInterface | null;
  status: REQUEST_STATUS;
}
