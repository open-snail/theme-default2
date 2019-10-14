<template>
  <div class="archive">
    <div class="title">归档</div>
    <ul>
      <li v-for="item in list" :key="item.id" class="content">
        <span> {{ item.title }}</span>
        <span>{{ item.time }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchArchiveTotalByDateList, fetchConfigList } from '~/api/index'
export default {
  name: 'archive',
  async asyncData({ app, store, params }) {
    let result = await fetchArchiveTotalByDateList(app.$axios.$request)
    return {
      list: result.models
    }
  }
}
</script>

<style scoped lang="scss">
.archive {
  width: 1000px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-items: center;

  .title {
    font-size: 16px;
    color: #999;
  }

  .content {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
}
</style>
