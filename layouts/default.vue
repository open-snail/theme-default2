<template>
  <div class="layout">
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
<style lang="scss">
  .layout {
    .header {
      height: 300px;
    }
    .body {
      width: 1200px;
      margin: 0 auto;
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      justify-items: center;
    }
  }

</style>
