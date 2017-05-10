var Vue = require('vue')
var VueCookie = require('../')

Vue.use(VueCookie)

var COUNTER_NAME = 'vue-js-counter'

new Vue({
  el: 'div',
  data: {
    counter: 0
  },
  ready: function () {
    if (this.$cookie.get(COUNTER_NAME)) {
      this.counter = parseInt(this.$cookie.get(COUNTER_NAME), 10)
    }

    setInterval(function () {
      this.increment()
    }.bind(this), 1000)
  },
  methods: {
    increment: function () {
      this.counter += 1
    }
  },
  watch: {
    counter: function (value) {
      this.$cookie.set(COUNTER_NAME, value)
    }
  }
})
