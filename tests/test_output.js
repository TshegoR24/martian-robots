const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { parseAndRun } = require('../src/martian_robots');

function read(file) {
  return fs.readFileSync(path.resolve(__dirname, 'test_data', file), 'utf8').trim();
}

const input = read('sample_input.txt');
const expected = read('expected_output.txt');
const actual = parseAndRun(input).trim();

// Always print the intended output (for kata submission visibility)
console.log(actual);

try {
  assert.strictEqual(actual, expected);
} catch (err) {
  // On mismatch, show a brief diff context and exit nonzero
  console.error('\n--- Expected ----------------');
  console.error(expected);
  console.error('--- Actual ------------------');
  console.error(actual);
  process.exitCode = 1;
}


