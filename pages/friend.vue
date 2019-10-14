<template>
  <div class="friendly">
    <div v-for="item in items" :key="item.id" class="item">
      <el-avatar class="img" :size="100" :src="item.image"></el-avatar>
      <div class="name">{{item.name}}</div>
      <div class="desc">{{item.description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'friend',
  data() {
    return {
      items: [
        { name: '百度', description: '百度一下,你就知道', image: 'https://www.baidu.com/img/bd_logo1.png?where=super' },
        { name: '百度', description: '百度一下,你就知道', image: 'https://www.baidu.com/img/bd_logo1.png?where=super' },
        { name: '百度', description: '百度一下,你就知道', image: 'https://www.baidu.com/img/bd_logo1.png?where=super' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .friendly {
    width: 1000px;
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    justify-items: center;

    .item {
      text-align: center;
      margin: 20px;
      padding: 30px;
      border: 1px solid rgb(245, 245, 245);
      border-radius: 10px;


      .name {
        margin: 5px;
        text-align: center;
      }

      .desc {
        margin: 5px;

      }
    }
  }
</style>
