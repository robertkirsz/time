<template>
  <div class="clock">
    <div class="inputs">
      <input type="number" @input="updateInput" v-model="year" min="1">-
      <input type="number" @input="updateInput" v-model="month" min="1" max="12">-
      <input type="number" @input="updateInput" v-model="day" min="1" :max="daysInMonth">&nbsp;
      <input type="number" @input="updateInput" v-model="hour" min="0" max="23">:
      <input type="number" @input="updateInput" v-model="minutes" min="0" max="59">:
      <input type="number" @input="updateInput" v-model="seconds" min="0" max="59">
    </div>
    <div class="buttons">
      <button v-if="clockInterval" class="fa fa-stop" @click="stopClock" />
      <button v-else class="fa fa-play" @click="startClock" />
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'clock',
  props: { daysInMonth: Number },
  data () {
    return {
      clockInterval: null,
      year: null,
      month: null,
      day: null,
      hour: null,
      minutes: null,
      seconds: null
    }
  },
  beforeMount () {
    this.updateTime()
    this.startClock()
  },
  methods: {
    updateInput () {
      this.stopClock()
      this.emitChangeTime()
    },
    startClock () {
      this.clockInterval = setInterval(this.updateTime, 1000)
    },
    stopClock () {
      clearInterval(this.clockInterval)
      this.clockInterval = null
    },
    updateTime () {
      const now = moment()

      this.year = now.format('YYYY')
      this.month = now.format('MM')
      this.day = now.format('DD')
      this.hour = now.format('HH')
      this.minutes = now.format('mm')
      this.seconds = now.format('ss')

      this.emitChangeTime()
    },
    emitChangeTime () {
      this.$emit('changeTime', moment([ this.year, this.month - 1, this.day, this.hour, this.minutes, this.seconds ]))
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.clock {
  display: flex;
  align-items: center;
  padding: 20px;
  align-self: center;
  border: 1px solid #2c3e50;
  border-radius: 5px;
}

.inputs {
  @include flex(row, nowrap, flex-start, center);
  input {
    font-size: 1.5em;
    width: 1.9em;
    &:first-of-type { width: 2.9em; }
  }
}

.buttons {
  margin-left: 10px;
  button {
    padding: 5px;
    width: 24px;
    border: none;
    background: none;
    outline: none;
  }
}
</style>
