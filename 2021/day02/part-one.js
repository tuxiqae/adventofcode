import parseInput from '../lib/input.js';

function calculateSteps(instruction) {
  const [direction, steps] = instruction.split(' ');

  const stepsNum = parseInt(steps, 10);
  let depth = 0;
  let horizontalPosition = 0;

  switch (direction) {
    case 'up':
      depth -= stepsNum;
      break;
    case 'down':
      depth += stepsNum;
      break;
    case 'forward':
      horizontalPosition += stepsNum;
      break;
    default:
      process.stdout.write('Could not translate instruction');
  }

  return { depth, horizontalPosition };
}

const input = parseInput('./input.txt');

const total = input.reduce((totalLocation, instruction) => {
  const clonedLocation = { ...totalLocation };
  const location = calculateSteps(instruction);

  clonedLocation.depth += location.depth;
  clonedLocation.horizontalPosition += location.horizontalPosition;

  return clonedLocation;
}, { depth: 0, horizontalPosition: 0 });

const result = total.depth * total.horizontalPosition;

process.stdout.write(result.toString());
