<template>
    <label :class="wrapClasses"
    v-on:mousedown="onMousedown"
    v-on:mouseup="onMouseup"
    v-on:mouseleave="onMouseleave"
    v-on:mouseover="onMouseover" ref="checkbox">
      <Icon :type="checkboxIcon" ref="checkboxicon"></Icon>
      <input :class="inputClasses" type="checkbox" class="regular-checkbox" />
    </label>
</template>

<script>
import Icon from './icon'
export default {
  name: 'CheckBox',
  components: {
    'Icon': Icon
  },
  props: [],
  data: function () {
    return {
      checkboxIcon: 'checkbox'
    }
  },
  computed: {
    wrapClasses () {
      return ['fluent-checkbox-wrap']
    },
    inputClasses () {
      return ['fluent-checkbox-input']
    }
  },
  methods: {
    onMousedown () {
      if (this.checkboxIcon === 'checkbox') {
        this.checkboxIcon = 'checkbox-fill'
      } else if (this.checkboxIcon === 'checkbox-composite-reversed') {
        this.$refs.checkbox.style.color = 'rgb(0,0,0)'
        this.checkboxIcon = 'checkbox-composite-reversed'
      }
    },
    onMouseup () {
      if (this.checkboxIcon === 'checkbox-fill') {
        this.$refs.checkbox.style.color = 'rgb(41,143,204)'
        this.checkboxIcon = 'checkbox-composite-reversed'
      } else if (this.checkboxIcon === 'checkbox-composite-reversed') {
        this.$refs.checkbox.style.color = 'rgb(0,0,0)'
        this.checkboxIcon = 'checkbox'
      }
    },
    onMouseleave () {
      if (this.checkboxIcon === 'checkbox-fill') {
        this.checkboxIcon = 'checkbox-composite'
      } else if (this.checkboxIcon === 'checkbox-composite-reversed') {
        this.checkboxIcon = 'checkbox'
      }
    },
    onMouseover () {

    }
  }
}
</script>
