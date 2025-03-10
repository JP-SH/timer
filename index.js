class Timer {
  constructor(durationInput, startButton, pauseButton, callBacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callBacks) {
      this.onStart = callBacks.onStart;
      this.onTick = callBacks.onTick;
      this.onComplete = callBacks.onComplete;
    }

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);

  }
  start = () => {
    if (this.onStart) {
      this.onStart();
    }
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };
  pause = () => {
    clearInterval(this.interval);
  };
  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
    this.timeRemaining = this.timeRemaining - 1;
      if (this.onTick) {
        this.onTick();
      }
    }
    // the reason we dont have to use parens() when calling timeRemaining is because we used 'get' when we made the function. Get allows you to treat it as an instance variable. Get automatically invokes it.
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

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(){

  },
  onTick(){
    console.log('Timer just ticked down');
  },
  onComplete(){
    console.log('Timer is completed');
  }
});
