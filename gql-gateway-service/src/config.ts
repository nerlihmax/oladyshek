import { getSafeEnvVar } from './utils/getSafeEnvVar';

export const PORT = process.env.PORT ?? 3000;
export const RECEPIES_SERVICE_PORT = getSafeEnvVar('RECEPIES_SERVICE_PORT');
export const RECEPIES_SERVICE_HOST = process.env.RECEPIES_SERVICE_HOST ?? 'recepies-service';
/**
 * 5 секунд
 */
export const CONNECTION_TIMEOUT = 5;
