<template>
  <div :title="percent | toPercent">
    <p>{{ title }}</p>
    <pie :value="percent" />
  </div>
</template>

<script>
import Pie from './Pie'

export default {
  name: 'chart',
  components: { Pie },
  props: {
    title: String,
    total: Number,
    passed: Number
  },
  computed: {
    percent () {
      return this.passed / this.total * 100
    }
  },
  filters: {
    toPercent (value) {
      return `${value.toFixed(2)}%`
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  cursor: default;
}

p { margin-top: 0; }
</style>
