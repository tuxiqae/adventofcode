import parseInput from '../lib/input.js';

function calculateSteps(instruction, aim) {
  const [direction, steps] = instruction.split(' ');

  const stepsNum = parseInt(steps, 10);
  let depth = 0;
  let horizontalPosition = 0;
  let localAim = aim;

  switch (direction) {
    case 'up':
      localAim -= stepsNum;
      break;
    case 'down':
      localAim += stepsNum;
      break;
    case 'forward':
      horizontalPosition += stepsNum;
      depth += localAim * stepsNum;
      break;
    default:
      process.stdout.write('Could not translate instruction');
  }

  return { depth, horizontalPosition, aim: localAim };
}

const input = parseInput('./input.txt');

const total = input.reduce((totalLocation, instruction) => {
  const clonedLocation = { ...totalLocation };
  const location = calculateSteps(instruction, clonedLocation.aim);

  clonedLocation.depth += location.depth;
  clonedLocation.horizontalPosition += location.horizontalPosition;
  clonedLocation.aim = location.aim;

  return clonedLocation;
}, { depth: 0, horizontalPosition: 0, aim: 0 });

const result = total.depth * total.horizontalPosition;

process.stdout.write(result.toString());
