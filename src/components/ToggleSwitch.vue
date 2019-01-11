
<template>

<span class="toggleswitch">
  <label :class="labelclasses"
    v-on:click="onClick"
    v-on:mousedown="onMousedown"
    v-on:mouseup="onMouseup" ref="switchlabel">
      <span :class="switchclasses"></span>
      <input class="toggleswitch-checkbox" type="checkbox" ref="switchinput">
  </label>
</span>

</template>

<script>
export default {
  name: 'ToggleSwitch',
  data: function () {
    return {
      checked: false,
      mouseDown: false
    }
  },
  computed: {
    labelclasses () {
      var rst = ['toggleswitch-label']
      if (this.checked) {
        rst.push('switch-on')
      } else {
        rst.push('switch-off')
      }

      if (this.mouseDown) {
        rst.push('switch-down')
      }
      return rst
    },
    switchclasses () {
      var rst = ['toggleswitch-switch']
      if (this.checked) {
        rst.push('switch-on')
      } else {
        rst.push('switch-off')
      }

      if (this.mouseDown) {
        rst.push('switch-down')
      }

      return rst
    }
  },
  methods: {
    onClick (event) {
      if (event.target !== this.$refs.switchinput) {
        return
      }
      if (this.checked) {
        this.checked = false
      } else {
        this.checked = true
      }
    },
    onMousedown (event) {
      this.mouseDown = true
    },
    onMouseup (event) {
      this.mouseDown = false
    }
  }
}
</script>
