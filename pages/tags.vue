<template>
  <div class="tags">
  <span class="tag" v-for="(tag,index) in tags" :key="index">
    <span class="tag-name">{{tag.name}}</span><span class="tag-count">{{tag.count}}</span>
  </span>
  </div>
</template>

<script>
export default {
  name: 'tags',
  data() {
    return {
      tags: [{ name: 'java', count: 1 }, { name: 'vue', count: 1 }]
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
