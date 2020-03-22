class Game {
  constructor() {
    this.screen = new Screen(640, 640);
    this.scenes = {
      loading: new Loading(this)
    };
    this.currentScene = this.scenes.loading;
    this.currentScene.init();
  }

  frame(time) {
    if(this.currentScene.isActive == false) {
      this.currentScene = this.scenes[this.currentScene.nextScene];
      this.currentScene.init();
    }
    this.currentScene.render(time);
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

  fill(color) {
    this.context.fillStyle = color;
    this.context.fillRect(0, 0, this.width, this.height);
  }
}

class Scene {
  constructor(game) {
    this.game = game;
  }

  init() {
    this.isActive = true;
  }

  render(time) {

  }
}

class Loading extends Scene {
  constructor(game) {
    super(game);
    this.nextScene = 'menu';
  }

  render(time) {
    this.game.screen.fill('#595363');
    super.render(time);
  }
}

window.onload = () => {
  const interlude = new Game();
  interlude.run();
};

console.log('ку');
