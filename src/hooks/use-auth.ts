import { useAppSelector } from 'store/types';

export const useAuth = () => {
  const { email } = useAppSelector((state) => state.user.user);
  return !!email;
};
