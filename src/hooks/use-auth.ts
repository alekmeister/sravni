import { useAppSelector } from 'store/types';
import { selectUser } from 'store/auth';
import type { UserAuthInterface } from 'types/UserAuthInterface';

export const isAuthedUser = (user: UserAuthInterface | null): user is UserAuthInterface => !!user && 'email' in user;

export const useAuth = () => {
  return useAppSelector(selectUser);
};
