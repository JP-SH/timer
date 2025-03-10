class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);

  }
  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };
  pause = () => {
    clearInterval(this.interval);
  };
  tick = () => {
    const timeRemaining = this.timeRemaining;
    // the reason we dont have to use parens() when calling timeRemaining is because we used 'get' when we made the function. Get allows you to treat it as an instance variable. Get automatically invokes it.
    this.timeRemaining = timeRemaining - 1;
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);
