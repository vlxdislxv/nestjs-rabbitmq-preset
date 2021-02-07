import { parse } from 'dotenv';
import { existsSync, readFileSync } from 'fs';
import { Env } from './env';

export function parseConfig() {
  if (!existsSync(Env.PATH)) {
    return {};
  }

  return parse(readFileSync(Env.PATH));
}
