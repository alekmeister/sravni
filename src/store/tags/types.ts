import { REQUEST_STATUS } from 'types/RequestStatuses';

export interface State {
  popularTags: string[];
  status: REQUEST_STATUS;
}
