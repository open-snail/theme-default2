<template>
  <div class="about">
    <div class="about-title">{{ about.title }}</div>
    <div class="about-content">{{ about.content }}</div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      about: { title: '关于我的博客', content: '内容' }
    }
  },
  async asyncData({ app, store, params }) {
    return {
      title: '关于我' + '-' + store.state.config.name
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>

<style scoped lang="scss">
.about {
  width: 1000px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-items: center;

  .about-title {
    padding: 10px;
  }

  .about-content {
    padding: 10px;
  }
}
</style>
