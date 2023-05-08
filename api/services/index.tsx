import { API_URL } from '@constants/EnvVars';

export const getMovementsService = () => fetch(API_URL);
