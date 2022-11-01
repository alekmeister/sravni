import { REQUEST_STATUS } from 'types/RequestStatuses';
import { CommentInterface } from 'types/CommentInterface';

export interface State {
  comments: CommentInterface[];
  status: REQUEST_STATUS;
}
