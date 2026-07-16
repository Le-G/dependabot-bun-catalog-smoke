import chalk from 'chalk';
import _ from 'lodash';
import { z } from 'zod';
import { delayMs } from '@smoke/shared';

const Schema = z.object({ name: z.string() });

export function render(name: string) {
  const parsed = Schema.parse({ name });
  return chalk.green(_.capitalize(parsed.name)) + ` (delay ${delayMs})`;
}

if (import.meta.main) {
  console.log(render('dependabot catalog smoke'));
}
