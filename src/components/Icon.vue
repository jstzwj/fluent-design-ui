<template>
    <i :class="classes"></i>
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
    color: String
  },
  computed: {
    classes () {
      return ['fluent-icon', `fluent-icon-${this.type}`]
    }
  }
}
</script>
