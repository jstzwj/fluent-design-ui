<template>
    <component :is="tagName" :class="classes">
        <span ref="slot"><slot></slot></span>
    </component>
</template>

<script>
export default {
  name: 'Button',
  props: [],
  data: function () {
    return {
    }
  },
  computed: {
    classes () {
      return ['fluent-button']
    },
    tagName () {
      return 'button'
    }
  }
}
</script>

<style lang="less" scoped>
    @import '../styles/index.less';
</style>
