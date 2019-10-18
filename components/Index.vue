<template>
  <div id="scroll" class="index">
    <div class="body">
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
let timer = null
import { fetchArticleList } from '~/api/index'

export default {
  name: 'Index',
  props: {
    list: {
      type: Array
    },
    page: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  watch: {
    refreshLoading(val) {
      if (!val) {
        this.refresh.height = 0
      }
    }
  },
  methods: {
    handleScroll() {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop //变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight //滚动条到底部的条件
      if (scrollTop + windowHeight == scrollHeight) {
        //写后台加载数据的函数
        // console.log(
        //   '距顶部' +
        //     scrollTop +
        //     '可视区高度' +
        //     windowHeight +
        //     '滚动条总高度' +
        //     scrollHeight
        // )
        console.log(this.page)
        this.page.page += 1
        this.pageChange(this.page.page)
      }
    },
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3), 0 0 6px rgba(0, 0, 0, 0.5);
}
.index {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
