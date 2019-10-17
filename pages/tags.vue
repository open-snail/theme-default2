<template>
  <div class="tags">
    <Tag
      :style="{backgroundColor: randomColor()}"
      class="tag"
      :name="item.name"
      :count="item.postsTotal"
      v-for="item in list"
      :key="item.id"
    />
  </div>
</template>

<script>
import Tag from '../components/Tag'
import { fetchTagsList } from '~/api/index'

export default {
  name: 'tags',
  components: {
    Tag
  },
  mounted() {
    console.log(this.randomColor())
  },
  methods: {
    randomColor() {
      return 'hsl(' +
        Math.round(Math.random() * 360) + ',' +
        Math.round(Math.random() * 100) + '%,' +
        Math.round(Math.random() * 80) + '%)'
    }
  },
  data() {
    return {
      colorList: [
        [255, 243, 235],
        [255, 229, 233],
        [255, 250, 233],
        [227, 251, 237],
        [245, 245, 255],
        [233, 246, 255]
      ]
    }
  },
  async asyncData({ app, store, params }) {

    let result = await fetchTagsList(app.$axios.$request)
    console.log(result)
    return {
      title: '标签' + '-' + store.state.config.name,
      list: result.models
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
  .tags {
    padding-top: 20px;

    .tag {
      color: white;
      border-radius: 100px;
      display: inline-block;
      margin: 12px;
      padding: 12px;
    }
  }
</style>
