<template>
  <div class="index">
    <el-row :gutter="20">
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
          <span>标签a</span>
          <span>标签a</span>
          <span>标签a</span>
        </div>
      </el-col>
    </el-row>
    <div class="body">
      <div class="item" v-for="(item,index) in itemList" :key="index">
        <h1 class="item-title">{{item.title}}</h1>
        <div class="item-content">{{item.content}}</div>
       <div class="icon">
         <span>star</span>
         <span>user</span>
       </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemList: [
        { title: '标题', content: '我是内容' },
        { title: '标题', content: '我是内容' }
      ]
    }
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
