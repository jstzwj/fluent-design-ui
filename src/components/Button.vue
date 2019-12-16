<template>
  <button class="fluent-button"
    v-bind:class="{ 'fluent-button-primary': primary, 'theme-dark': dark, 'theme-light': !dark }"
    ref="btn"
    v-on:mousedown="onMousedown"
    v-on:mouseup="onMouseup"
    :type="type"
    :disabled="disabled">
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      default: 'Button'
    },
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    click: {
      type: Function,
      default: () => {}
    },
    primary: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
    }
  },
  computed: {
    
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
      if (this.disabled) { return }
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
      if (this.disabled) { return }
      btn.style.transform = `rotateX(0deg) rotateY(0deg) scaleX(1) scaleY(1)`
    }
  }
}
</script>
