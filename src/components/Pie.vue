<template>
  <svg viewBox="0 0 32 32">
    <circle r="16" cx="16" cy="16" :style="style" />
  </svg>
</template>

<script>
export default {
  name: 'pie',
  props: { value: Number },
  computed: {
    style () {
      return { 'stroke-dasharray': `${this.value} 100` }
    }
  }
}
</script>

<style lang="scss" scoped>
svg {
  width: 100px; height: 100px;
  transform: rotate(-90deg);
  background: #eee;
  border-radius: 50%;
}

circle {
  fill: none;
  stroke: yellowgreen;
  stroke-width: 32;
  transition: all 0.3s;
}
</style>
