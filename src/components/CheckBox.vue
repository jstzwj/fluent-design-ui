<template>
    <label :class="wrapClasses"
    v-on:mousedown="onMousedown"
    v-on:mouseup="onMouseup"
    v-on:mouseout="onMouseout"
    v-on:mouseover="onMouseover" ref="checkbox">
      <Icon :type="iconType" ref="checkboxicon" :color="iconColor" fontWeight="normal"></Icon>
      <Icon type="checkbox" fontWeight="normal" v-if="showBorder" style="position:absolute; top:2px; left:0px;"></Icon>
      <input :class="inputClasses" type="checkbox" class="regular-checkbox"/>
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
      iconType: 'checkbox',
      state: 'unchecked',
      showBorder: true,
      iconColor: 'rgba(0,0,0,0.59765625)'
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
      if (this.state === 'unchecked') {
        this.iconType = 'checkbox-fill'
      } else if (this.state === 'checked') {
        this.iconColor = 'rgba(0,0,0,0.59765625)'
        this.iconType = 'checkbox-composite-reversed'
      }
    },
    onMouseup () {
      if (this.state === 'unchecked') {
        this.iconColor = 'rgb(41,143,204)'
        // this.borderColor = 'rgba(0,0,0,0.59765625)'
        this.showBorder = true
        this.iconType = 'checkbox-composite-reversed'
        this.state = 'checked'
      } else if (this.state === 'checked') {
        this.iconColor = 'rgba(0,0,0,0.59765625)'
        // this.borderColor = 'rgba(0,0,0,0)'
        this.showBorder = false
        this.iconType = 'checkbox'
        this.state = 'unchecked'
      }
    },
    onMouseout (event) {
      // this.borderColor = 'rgba(0,0,0,0)'
      this.showBorder = false
    },
    onMouseover (event) {
      if (this.state === 'checked') {
        // this.borderColor = 'rgba(0,0,0,0.59765625)'
        this.showBorder = true
      }
    }
  }
}
</script>
