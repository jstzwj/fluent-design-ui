<template>
    <component :is="tagName" :class="classes"
    v-on:mousedown="onMousedown"
    v-on:mouseup="onMouseup" ref="btn">
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
  },
  methods: {
    onMousedown: function (event) {
      function getTop (e) {
        var offset = e.offsetTop
        if (e.offsetParent != null) {
          offset += getTop(e.offsetParent)
        }
        return offset
      }

      function getLeft (e) {
        var offset = e.offsetLeft
        if (e.offsetParent != null) {
          offset += getLeft(e.offsetParent)
        }
        return offset
      }

      var btn = this.$refs.btn
      if (btn.hasAttribute('disabled')) { return }
      var rect = btn.getBoundingClientRect()
      var left = getLeft(btn)
      var top = getTop(btn)
      var mouseLeft = event.clientX + window.pageXOffset
      var mouseTop = event.clientY + window.pageYOffset

      var rotateX = -((mouseLeft - left) / rect.width - 0.5) * 2
      var rotateY = ((mouseTop - top) / rect.height - 0.5) * 2
      console.log(rotateX + ':' + rotateY)
      btn.style.transform = `rotateX(${rotateX * 10}deg) rotateY(${rotateY * 10}deg) scaleX(0.98) scaleY(0.98)`
    },
    onMouseup: function (event) {
      var btn = this.$refs.btn
      if (btn.hasAttribute('disabled')) { return }
      btn.style.transform = `rotateX(0deg) rotateY(0deg) scaleX(1) scaleY(1)`
    }
  }
}
</script>
