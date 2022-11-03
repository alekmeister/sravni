import { REQUEST_STATUS } from 'types/RequestStatuses';
import type { UserAuthInterface } from 'types/UserAuthInterface';

export interface State {
  user: UserAuthInterface | null;
  status: REQUEST_STATUS;
}
