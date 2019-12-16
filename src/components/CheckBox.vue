<template>
    <label class="fluent-checkbox-wrap" ref="checkbox">
      <input class="fluent-checkbox-input" type="checkbox" v-model="checked"/>
      <span v-if="!checked" class="fluent-checkbox-box"></span>
      <span v-if="checked" class="fluent-icon fluent-icon-check-mark fluent-checkbox-check"></span>
      <span style="margin-left: 22px;"> {{checked}}</span>
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
