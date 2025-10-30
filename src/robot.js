class Robot {
  constructor(x, y, orientation, maxX, maxY, scents) {
    this.x = x;
    this.y = y;
    this.orientation = orientation; // 'N', 'E', 'S', 'W'
    this.maxX = maxX;
    this.maxY = maxY;
    this.scents = scents; // Set of strings like "x:y:dir"
    this.lost = false;
  }

  turnLeft() {
    const order = ['N', 'W', 'S', 'E'];
    const idx = order.indexOf(this.orientation);
    this.orientation = order[(idx + 1) % 4];
  }

  turnRight() {
    const order = ['N', 'E', 'S', 'W'];
    const idx = order.indexOf(this.orientation);
    this.orientation = order[(idx + 1) % 4];
  }

  forward() {
    if (this.lost) return; // No-op once lost

    const key = `${this.x}:${this.y}:${this.orientation}`;
    const [dx, dy] = Robot.deltaFor(this.orientation);
    const nextX = this.x + dx;
    const nextY = this.y + dy;

    // Check if moving off the grid
    if (nextX < 0 || nextY < 0 || nextX > this.maxX || nextY > this.maxY) {
      // Ignore move if a scent exists at the current position+orientation
      if (this.scents.has(key)) return;

      // Mark scent and lose the robot
      this.scents.add(key);
      this.lost = true;
      return;
    }

    this.x = nextX;
    this.y = nextY;
  }

  static deltaFor(orientation) {
    switch (orientation) {
      case 'N': return [0, 1];
      case 'E': return [1, 0];
      case 'S': return [0, -1];
      case 'W': return [-1, 0];
      default: throw new Error(`Unknown orientation: ${orientation}`);
    }
  }
}

module.exports = { Robot };


