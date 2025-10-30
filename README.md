# Martian Robots Simulation (JavaScript)

## Overview
This Node.js program simulates Martian robots on a grid, handling movements, orientations, and the "scent" rule.

## Tech Choices
- **Language**: JavaScript (Node.js) for simplicity, wide adoption in teams, and easy testing. It's readable and extensible.
- **Structure**: ES6 class for `Robot`, Map for commands. No full grid—uses a Set for scents.
- **Testing**: Built-in `assert` for basic tests; recommend Jest for CI/CD in a team.
- **Dependencies**: None (Node.js standard library).

## Running Instructions
1. Clone the repo: `git clone `https://github.com/TshegoR24/martian-robots.git' 
2. Run: `node martian_robots.js < input.txt` (input.txt has the data).
3. Tests: `node test_martian_robots.js`

## Approach
- Parsed input, simulated robots, tracked scents.
- Focused on clarity for team collaboration.
