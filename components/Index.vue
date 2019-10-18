<template>
  <div class="index">
    <el-row class="body">
      <el-col
        :xs="{ span: 0, offset: 0 }"
        :sm="{ span: 24, offset: 0 }"
        :md="{ span: 24, offset: 0 }"
        :lg="{ span: 6, offset: 5 }"
        :xl="{ span: 6, offset: 6 }"
      >
        <div class="item" v-for="(item, index) in list" :key="index">
          <NuxtLink
            :to="'/detail/' + item.id"
            style="text-decoration:none;color: #1b1f23"
          >
            <h1 class="item-title">{{ item.title }}</h1>
            <div class="item-content">{{ item.summary }}</div>
            <div class="icon">
              <i class="iconfont iconeye"></i>
              <span style="margin-right: 15px">{{ item.views }}</span>
              <i class="iconfont iconpinglun"></i>
              <span>{{ item.comments }}</span>
            </div>
          </NuxtLink>
        </div>
      </el-col>
    </el-row>
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
  name: 'Index',
  props: {
    list: {
      type: Array
    },
    page: {
      type: Object
    }
  },
  methods: {
    async pageChange(val) {
      let { models, pageInfo } = await fetchArticleList(this.$axios.$request, {
        page: val,
        size: 5,
        keywords: this.$store.state.keywords
      })
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
  height: 200px;
  border-radius: 20px;
  background-color: rgb(223, 223, 223);
}

.item-title {
  padding: 40px;
}

.item-content {
  padding-left: 40px;
  text-decoration: none !important;
  color: #222;
}

.icon {
  text-decoration: none !important;
  padding-top: 20px;
  padding-left: 40px;
  color: #222;
}

.pagination {
  margin: 0 auto;
}
.item:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.index {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
