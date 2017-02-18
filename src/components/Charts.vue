<template>
  <div class="charts">
    <chart title="Minute" :passed="minute" :total="60" />
    <chart title="Hour" :passed="hour" :total="60 * 60" />
    <chart title="Day" :passed="day" :total="60 * 24" />
    <chart title="Week" :passed="week" :total="24 * 7" />
    <chart title="Month" :passed="month" :total="24 * daysInMonth" />
    <chart title="Year" :passed="year" :total="daysInYear" />
    <chart title="Summer Olympics" :passed="daysSinceLastSummerOlympics" :total="daysBetweenSummerOlympics" />
    <chart title="Winter Olympics" :passed="daysSinceLastWinterOlympics" :total="daysBetweenWinterOlympics" />
    <chart title="Life" :passed="30" :total="90" />
  </div>
</template>

<script>
import { dates } from '../utils'
import Chart from './Chart'

export default {
  name: 'charts',
  components: { Chart },
  props: {
    time: Object,
    daysInMonth: Number,
    daysInYear: Number
  },
  computed: {
    minute () {
      return this.time.seconds()
    },
    hour () {
      return this.time.minutes() * 60 + this.time.seconds()
    },
    day () {
      return this.time.hours() * 60 + this.time.minutes()
    },
    week () {
      return this.time.weekday() * 24 + this.time.hours()
    },
    month () {
      return this.time.date() * 24 + this.time.hours()
    },
    year () {
      return this.time.dayOfYear()
    },
    daysBetweenSummerOlympics () {
      return dates.nextSummerOlympics.diff(dates.lastSummerOlympics, 'days', true)
    },
    daysSinceLastSummerOlympics () {
      return this.time.diff(dates.lastSummerOlympics, 'days', true)
    },
    daysBetweenWinterOlympics () {
      return dates.nextWinterOlympics.diff(dates.lastWinterOlympics, 'days', true)
    },
    daysSinceLastWinterOlympics () {
      return this.time.diff(dates.lastWinterOlympics, 'days', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.charts {
  display: flex;
  flex-wrap: wrap;
}
</style>
