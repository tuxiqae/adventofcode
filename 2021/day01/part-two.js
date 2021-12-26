import parseInput from '../lib/input.js';

const input = parseInput('./input.txt');
let amount = 0;
const WINDOW_SIZE = 3;
let current;
let next;

for (let i = 0; i < input.length - WINDOW_SIZE; i += 1) {
  current = parseInt(input[i], 10);
  next = parseInt(input[i + WINDOW_SIZE], 10);
  if (next > current) {
    amount += 1;
  }
}

process.stdout.write(amount.toString());
