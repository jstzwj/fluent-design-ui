<template>
  <Button style="height:50px;width:100px">Button</Button>
</template>

<script>
import Button from './Button'
export default {
  name: 'HelloWorld',
  components: {
    'Button': Button
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
