<template>
  <div id="app">
    <clock @changeTime="saveCustomTime" :daysInMonth="daysInMonth" />
    <charts
      :time="time"
      :daysInMonth="daysInMonth"
      :daysInYear="daysInYear"
    />
    <!-- <media-queries /> -->
  </div>
</template>

<script>
import moment from 'moment'
import Clock from './components/Clock'
import Charts from './components/Charts'
import MediaQueries from './components/MediaQueries'

export default {
  name: 'app',
  components: {
    Clock,
    Charts,
    MediaQueries
  },
  data () {
    return {
      time: moment()
    }
  },
  computed: {
    daysInMonth () {
      return moment(this.time).daysInMonth()
    },
    daysInYear () {
      return moment(this.time).isLeapYear() ? 366 : 365
    }
  },
  methods: {
    saveCustomTime (customTime) {
      this.time = customTime
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-flow: column nowrap;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
