import { get } from './methods.js';

export const getAll = () => get('event', { status: 'admitted' });
