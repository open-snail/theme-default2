<template>
  <div>

    <nav-bar class="header"></nav-bar>

    <nuxt />

  </div>
</template>
<script>
import NavBar from '~/components/NavBar'
export default {
  components: {
    NavBar
  }
}
</script>
<style>
@import '../static/css/reset.css';
.header {
  height: 500px;
}
</style>
