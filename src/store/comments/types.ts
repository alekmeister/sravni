import { REQUEST_STATUS } from 'types/RequestStatuses';
import type { CommentInterface } from 'types/CommentInterface';

export interface State {
  comments: CommentInterface[];
  status: REQUEST_STATUS;
}
