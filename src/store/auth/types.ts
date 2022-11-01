import { REQUEST_STATUS } from 'types/RequestStatuses';
import { UserAuthInterface } from 'types/UserAuthInterface';

export interface State {
  user: UserAuthInterface;
  status: REQUEST_STATUS;
}
