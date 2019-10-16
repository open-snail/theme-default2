<template>
  <div class="index">
    <div class="body">
      <div
        class="item"
        v-for="(item, index) in list"
        :key="index"
      >
        <NuxtLink :to="'/detail/'+ item.id">
          <h1 class="item-title">{{ item.title }}</h1>
          <div class="item-content">{{ item.summary }}</div>
          <div class="icon">
            <i class="iconfont iconeye"></i>
            <span style="margin-right: 15px">{{item.views}}</span>
            <i class="iconfont iconpinglun"></i>
            <span>{{item.comments}}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
    <!--    分页-->
    <el-pagination
      class="pagination"
      @current-change="pageChange"
      layout="prev,pager,next"
      :page-size="page.size"
      :total="page.total"
    ></el-pagination>
  </div>
</template>

<script>
import { fetchArticleList } from '~/api/index'

export default {
  async asyncData({ app, store, params }) {
    let { models, pageInfo } = await fetchArticleList(app.$axios.$request, { page: 1, size: 5 })
     let config = store.state.config
      app.head.title = config.name || ""
      app.head.meta = [
          { hid: 'description', name: 'description', content: config.description||"" },
          { hid: 'keywords', name: 'keywords', content: config.keywords || "" }
      ]
    return {
      list: models,
      page: pageInfo
    }
  },
  methods: {
    async pageChange(val) {
      let { models, pageInfo } = await fetchArticleList(this.$axios.$request, { page: val, size: 5 })
      this.page = pageInfo
      this.list = models
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
    cursor: pointer;
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
    text-decoration:none !important;
    color: #222;
  }

  .icon {
    text-decoration:none !important;
    padding-top: 20px;
    padding-left: 40px;
    color: #222;

  }

  .pagination {
    width: 300px;
    margin: 0 auto;
  }
</style>
