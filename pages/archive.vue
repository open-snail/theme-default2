<template>
  <div class="archive">
    <div class="title">归档</div>
    <ul>
      <li v-for="item in archiveList" :key="item.id" class="content">
        <span> {{ item.title }}</span>
        <span>{{ item.time }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'archive',
  data() {
    return {
      archiveList: [
        { id: 1, title: '我是标题', time: '2019-10-14' },
        { id: 1, title: '我是标题', time: '2019-10-14' }]
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
