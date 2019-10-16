<template>
  <div class="tags">
    <Tag class="tag" :name="item.name" :count="item.postsTotal" v-for="item in list" :key="item.id"/>
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
  async asyncData({ app, store, params }) {
    let result = await fetchTagsList(app.$axios.$request)
    console.log(result.models)
    return {
      title : "标签"+ "-" + store.state.config.name,
      list: result.models
    }
  },
   head () {
      return {
          title: this.title,
      }
   }

}
</script>

<style scoped lang="scss">
  .tags {
    padding-top: 20px;
    /*display: flex;*/
    /*margin: 0 auto;*/
    /*justify-items: center;*/
    .tag{
      display: inline-block;
      margin: 12px;
      padding: 12px;
    }
  }
</style>
