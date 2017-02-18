// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import moment from 'moment'
import App from './App'

const getLang = () => (
  navigator.languages !== undefined
    ? navigator.languages[0]
    : navigator.language
)

moment.locale(getLang())

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
