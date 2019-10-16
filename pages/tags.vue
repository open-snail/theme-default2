<template>
  <div class="tags">
    <span class="tag" v-for="(tag, index) in list" :key="index">
      <span class="tag-name">{{ tag.name }}</span
      ><span class="tag-count">{{ tag.postsTotal }}</span>
    </span>
  </div>
</template>

<script>
import { fetchTagsList } from '~/api/index'
export default {
  name: 'tags',
  async asyncData({ app, store, params }) {
    let  result = await fetchTagsList(app.$axios.$request)
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
  width: 1000px;
  padding-top: 20px;
  display: flex;
  margin: 0 auto;
  justify-items: center;

  .tag {
    margin: 10px;
    .tag-name {
      background-color: rgb(222, 232, 242);
    }

    .tag-count {
      background-color: rgb(193, 222, 230);
    }
  }
}
</style>
