import { readFileSync } from 'fs';

function parseInput(path) {
  return readFileSync(path, 'utf-8')
    .toString()
    .trim()
    .split('\n');
}

export default parseInput;
