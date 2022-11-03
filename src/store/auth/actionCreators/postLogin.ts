import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from 'config/settings';
import { SLICE_NAME } from 'store/auth/constants';
import type { AuthFields, UserAuthInterface } from 'types/UserAuthInterface';
import { TokenService } from 'services';
import { AxiosError } from 'axios';
import { setError } from 'store/serverError/slice';

interface In {
  user: AuthFields;
}

interface Out {
  user: UserAuthInterface;
}

const DEFAULT_ERROR_MESSAGE = 'Ошибка';

export const postLogin = createAsyncThunk<Out | { user: null }, In>(`${SLICE_NAME}/fetchLogin`, async (user, { rejectWithValue, dispatch }) => {
  const qryRegistration = user.user.username ? '' : '/login';
  const setServerError = (error: string | null) => dispatch(setError(error));
  try {
    const response = await axiosInstance.post<Out>(`users${qryRegistration}`, user);
    const { token } = response.data.user;
    if (token) {
      TokenService.setLocalAccessToken(token);
    }
    setServerError(null);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ errors: Record<string, [string]> }>;
    const errorMsgEntity = axiosError.response?.data.errors;
    if (errorMsgEntity) {
      const errorName = Object.keys(errorMsgEntity)[0];
      const errorValue = errorMsgEntity[errorName];
      const errorMessage = `${errorName} ${errorValue}`;
      setServerError(errorMessage);
    } else {
      setServerError(DEFAULT_ERROR_MESSAGE);
    }
    return rejectWithValue({ user: null });
  }
});
