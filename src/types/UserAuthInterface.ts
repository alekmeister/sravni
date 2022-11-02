export type UserAuthInterface = {
  email: string;
  username: string;
  bio: string | null;
  image: string;
  token: string;
};

export type AuthFields = {
  username?: string;
  email: string;
  password: string;
};
