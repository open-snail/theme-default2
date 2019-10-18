<template>
    <div class="tag" @click="findArticleListByTag">
      <span class="tag-name">{{ name }}  <span class="tag-count">{{ count }}</span></span>
    </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    name: {
      type: String,
      default: ''
    },
    count: {
      type: Number,
      default: 0
    }
  },
  methods: {
      findArticleListByTag(){
          this.$router.push("/tags/"+this.name)
      }
  }
}
</script>

<style scoped lang="scss">
  .tag {
    margin: 10px;
    cursor: pointer;

    .tag-name {
      display: inline;
      /*background-color: rgb(222, 232, 242);*/
    }

    .tag-count {
      display: inline;
      /*background-color: rgb(193, 222, 230);*/
    }
  }
</style>
