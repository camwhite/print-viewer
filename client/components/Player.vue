<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Hero title
          </h1>
          <h2 class="subtitle">
            Hero subtitle
          </h2>
        </div>
      </div>
    </section>
    <figure class="image" ref="image">
      <img src="https://imgur.com/ymiUygy.png" @load="onLoad" />
    </figure>
  </div>
</template>
<script>
export default {
  name: 'player',
  mounted () {
    this.loadingComponent = this.$loading.open({
      container: this.$refs.image
    })
  },
  methods: {
    onLoad () {
      this.loadingComponent.close()
    }
  }
}
</script>
