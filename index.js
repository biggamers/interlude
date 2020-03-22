class Game {
  constructor() {
    this.screen = new Screen(640, 640);
  }

  frame(time) {
    requestAnimationFrame(time => this.frame(time));
  }

  run() {
    requestAnimationFrame(time => this.frame(time));
  }
}

class Screen {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.canvas = this.createCanvas();
    this.canvas.width = width;
    this.canvas.height = height;
    this.context = this.canvas.getContext('2d');
  }

  createCanvas() {
    let elements = document.getElementsByTagName('canvas');
    if(elements.length > 0) {
      return elements[0];
    }
    let canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    return canvas;
  }
}

window.onload = () => {
  const interlude = new Game();
  interlude.run();
};

console.log('ку');
