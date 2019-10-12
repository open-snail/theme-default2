<template>
  <div class="index">
    <el-row :gutter="20" type="flex" align="middle">
      <el-col :span="14" :offset="7">
        <div>
          <span>标签a</span>
          <span>标签a</span>
          <span>标签a</span>
          <el-input
            class="input"
            placeholder="请输入内容"
            style=" width: 200px;margin-left: 400px"
          />
          <i class="iconfont icon-github" style="font-size: 28px;text-align: center"></i>
        </div>
      </el-col>
    </el-row>
    <div class="body">
      <div class="item" v-for="(item,index) in itemList" :key="index">
        <h1 class="item-title">{{item.title}}</h1>
        <div class="item-content">{{item.content}}</div>
       <div class="icon">
         <i class="iconfont icon-eye"></i>
         <span style="margin-right: 15px">23</span>
         <i class="iconfont icon-pinglun"></i>
         <span>10</span>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '~/api/index.js';
export default {
  data() {
    return {
      itemList: [
        { title: '标题', content: '我是内容' },
        { title: '标题', content: '我是内容' }
      ]
    }
  },
  async asyncData({ app, store, params }) {
    await api.test("/api/blog/auth/master/v1/get")
  },
  components: {}
}
</script>

<style scoped>
  .index {
    margin-top: -50px;
  }

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
  .icon{
    padding-top: 20px;
    padding-left: 40px;

  }
</style>
