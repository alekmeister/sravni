import { useAppSelector } from 'store/types';

export const useAuth = () => {
  const { email, token, username, image } = useAppSelector((state) => state.user.user);
  return {
    isAuth: !!email,
    image,
    email,
    token,
    username,
  };
};
