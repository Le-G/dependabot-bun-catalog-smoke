import ms from 'ms';
import { z } from 'zod';

export const delayMs = ms('500ms');

export const IdSchema = z.string().uuid();
