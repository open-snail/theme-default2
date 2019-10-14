<template>
  <div class="index">
    <div class="body">
      <div
        class="item"
        v-for="(item, index) in list"
        :key="index"
        @click="toDetailClick(item)"
      >
        <h1 class="item-title">{{ item.title }}</h1>
        <div class="item-content">{{ item.summary }}</div>
        <div class="icon">
          <i class="iconfont icon-eye"></i>
          <span style="margin-right: 15px">{{item.views}}</span>
          <i class="iconfont icon-pinglun"></i>
          <span>{{item.comments}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {  fetchArticleList } from '~/api/index'

export default {
  data() {
    return {
      itemList: [
        { id: '1', title: '标题', content: '我是内容' },
        { id: '2', title: '标题', content: '我是内容' }
      ]
    }
  },
  async asyncData({ app, store, params }) {
    let {models, pageInfo} = await fetchArticleList(app.$axios.$request,{page:1,size:5})
    return {
      list: models
    }
  },
  methods: {
    toDetailClick(item) {
      console.log(item)
      this.$router.push({ name: 'detail-id', query: { id: item.id } })
    }
  },
  components: {}
}
</script>

<style scoped>


.body {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-items: center;
}

.item {
  display: inline;
  margin: 10px auto;
  padding: 10px auto;
  width: 1000px;
  height: 250px;
  border-radius: 20px;
  background-color: rgb(223, 223, 223);
}

.item-title {
  padding: 40px;
}

.item-content {
  padding-left: 40px;
}

.icon {
  padding-top: 20px;
  padding-left: 40px;
}
</style>
