const fs = require('fs');
const path = require('path');
const { Robot } = require('./robot');

function parseAndRun(input) {
  const lines = input.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
  if (lines.length === 0) return '';

  const [maxX, maxY] = lines[0].split(/\s+/).map(Number);
  const scents = new Set();
  const outputs = [];

  for (let i = 1; i < lines.length; i += 2) {
    const [xStr, yStr, orientation] = lines[i].split(/\s+/);
    const instructions = lines[i + 1] || '';
    const robot = new Robot(Number(xStr), Number(yStr), orientation, maxX, maxY, scents);

    for (const ch of instructions) {
      if (robot.lost) break;
      if (ch === 'L') robot.turnLeft();
      else if (ch === 'R') robot.turnRight();
      else if (ch === 'F') robot.forward();
      else {
        // Future extensibility: ignore unknown commands for now
      }
    }

    outputs.push(`${robot.x} ${robot.y} ${robot.orientation}${robot.lost ? ' LOST' : ''}`);
  }

  return outputs.join('\n');
}

function runFromFile(filePath) {
  const absolute = path.resolve(filePath);
  const input = fs.readFileSync(absolute, 'utf8');
  const result = parseAndRun(input);
  return result;
}

if (require.main === module) {
  const fileArg = process.argv[2];
  const input = fileArg ? fs.readFileSync(path.resolve(fileArg), 'utf8') : fs.readFileSync(0, 'utf8');
  const result = parseAndRun(input);
  process.stdout.write(result + (result.endsWith('\n') ? '' : '\n'));
}

module.exports = { parseAndRun, runFromFile };


