<template>
  <div>
    {{ connect ? 'connected' : 'disconnected' }}
  </div>
</template>
<script>
if (module.hot) {
  module.hot.accept()
}
export default {
  name: 'App',
  sockets: {
    connect () {
      this.connect = true
    }
  },
  data () {
    return {
      connect: false
    }
  }
}
</script>
<style>
/* CSS */
</style>

