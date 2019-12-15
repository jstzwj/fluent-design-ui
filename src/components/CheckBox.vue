<template>
    <label class="fluent-checkbox-wrap" ref="checkbox">
      <input class="fluent-checkbox-input" type="checkbox" v-model="checked"/>
      <Icon type="checkbox" v-if="!checked" fontWeight="normal" class="fluent-checkbox-box"></Icon>
      <span v-if="!checked" class="fluent-checkbox-fill"></span>
      <Icon type="checkbox-composite-reversed" v-if="checked" fontWeight="normal" class="fluent-checkbox-check"></Icon>
      <Icon type="checkbox" fontWeight="normal" v-if="checked" class="fluent-checkbox-border"></Icon>
      <span> {{checked}}</span>
    </label>
</template>

<script>
import Icon from './icon'
export default {
  name: 'CheckBox',
  components: {
    'Icon': Icon
  },
  props: ['checked'],
  data: function () {
    return {
      iconType: 'checkbox',
      state: 'unchecked',
      checkbox: false
    }
  },
  computed: {
  },
  methods: {
    
  }
}
</script>

<style scoped>
</style>
