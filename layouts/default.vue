<template>
  <div>

    <nav-bar class="header"></nav-bar>
    <div class="body">
      <nuxt/>
    </div>
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
  .body {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-items: center;
  }
</style>
