import parseInput from '../lib/input.js';

const input = parseInput('./input.txt');
let amount = 0;
let current = parseInt(input[0], 10);
let next;

for (let i = 0; i < input.length - 1; i += 1) {
  next = parseInt(input[i + 1], 10);
  if (next > current) {
    amount += 1;
  }
  current = next;
}

process.stdout.write(amount.toString());
