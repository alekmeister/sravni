import axios from 'axios';

export const baseApiUrl = 'https://api.realworld.io/api';

axios.defaults.headers.common = {
  Authorization: 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InF3ZUBtYWlsLnJ1IiwidXNlcm5hbWUiOiJ0ZXN0MTIzNDUyMzQiLCJpYXQiOjE2NjczODg5MjYsImV4cCI6MTY3MjU3MjkyNn0.B3Wyby4xi6a81H4tYc7vswIjYUWn5sWnnJkEYrbbej8',
};
