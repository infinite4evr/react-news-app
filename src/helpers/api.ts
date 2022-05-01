import axios from 'axios';
import { BASE_API_URL } from '../constants/api-constants';

export const api = axios.create({
  baseURL: BASE_API_URL,
});

export const PAGE_SIZE = 9;

interface ApiError {
  status: string;
  msg: string;
}

//assert if an api error
export function isNewsApiError(data: unknown): data is ApiError {
  if (data && (data as ApiError).msg && 'status' in (data as ApiError)) {
    return true;
  }

  return false;
}
