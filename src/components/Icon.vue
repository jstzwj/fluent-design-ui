<template>
    <i :class="classes"
    :style="styles"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: [Number, String],
    color: String,
    borderColor: {
      type: String,
      default: 'rgba(0,0,0,0)'
    },
    borderType: {
      type: String,
      default: 'solid'
    },
    borderSize: {
      type: String,
      default: '2px'
    },
    fontWeight: {
      type: String,
      default: 'normal'
    }
  },
  computed: {
    classes () {
      return ['fluent-icon', `fluent-icon-${this.type}`]
    },
    styles () {
      return {
        height: this.size + 'px',
        width: this.size + 'px',
        color: this.color,
        border: `${this.borderSize} ${this.borderType} ${this.borderColor}`,
        fontWeight: this.fontWeight
      }
    }
  }
}
</script>
