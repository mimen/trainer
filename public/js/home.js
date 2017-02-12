//jshint esversion: 6
Vue.config.delimiters = ['${', '}'];

console.log('hello');

const vm = new Vue({
  el: '#app',

  data: {
    seconds: 0,

    buttonText: 'on',

    status: false,

    todos: [{
      name: 'pushups',
      rest: 5
    },{
      name: 'pushups',
      rest: 10
    },{
      name: 'pushups',
      rest: 20
    }]

  },

  methods: {

    toggle: function() {
      this.status = !this.status;
      if (this.status === true) {
        this.buttonText = 'off';
        this.startTimer();
      } else {
        this.buttonText = 'on';
      }
    },

    formatTime: function(seconds) {
      return numeral(seconds).format('00:00:00');
    },

    startTimer: function() {
      setTimeout(() => {
        if (this.status) {
          this.update();
          this.startTimer();
        }
      }, 1000);
    },

    update: function() {
      this.seconds++;
    },

    time: function() {
      return this.seconds;
    }
  }
});
