<template>
    <label :class="wrapClasses"
    v-on:mousedown="onMousedown"
    v-on:mouseup="onMouseup" ref="checkbox">
        <input :class="inputClasses" type="checkbox" id="checkbox-1-1" class="regular-checkbox" />
    </label>
</template>

<script>
export default {
  name: 'CheckBox',
  props: [],
  data: function () {
    return {
    }
  },
  computed: {
    wrapClasses () {
      return ['fluent-checkbox-wrap']
    },
    inputClasses () {
      return ['fluent-checkbox-input']
    }
  }
}
</script>
