import _ from 'lodash';
import ms from 'ms';
import { z } from 'zod';
import { v4 as uuid } from 'uuid';
import { delayMs } from '@smoke/shared';

const Schema = z.object({ id: z.string() });

export function handler() {
  return {
    id: uuid(),
    wait: ms('1s'),
    sample: _.sample([1, 2, 3]),
    delay: delayMs,
    ok: Schema.safeParse({ id: 'x' }).success,
  };
}

if (import.meta.main) {
  console.log(handler());
}
