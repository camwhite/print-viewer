<template>
  <div>
    {{ connected ? 'connected' : 'disconnected' }}
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
      this.connected = true
    },
    disconnect () {
      this.connected = false
    }
  },
  data () {
    return {
      connected: false
    }
  }
}
</script>
<style>
/* CSS */
</style>

