<template>
  <div>
    <player></player>
  </div>
</template>
<script>
import Player from './components/Player';

if (module.hot) {
  module.hot.accept()
}

export default {
  name: 'App',
  components: { Player },
  sockets: {
    connect () {
      this.$toast.open('connected')
    },
    disconnect () {
      this.$toast.open('disconnected')
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

