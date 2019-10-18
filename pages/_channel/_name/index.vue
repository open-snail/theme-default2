<template>
  <div>
    <Index :list="list" :page="page"/>
  </div>
</template>

<script>
import { fetchArticleList } from '~/api/index'
import Index from '~/components/Index'
export default {
  async asyncData({ app, store, params }) {
      let query = {
          page: 1,
          size: 5,
          keywords: store.state.keywords
      }
      if (params !== null && params.channel === "tags"){
          query['tagsName'] = params.name
      }

    let { models, pageInfo } = await fetchArticleList(app.$axios.$request, query)
    let config = store.state.config
    app.head.title = config.name || ''
    app.head.meta = [
      {
        hid: 'description',
        name: 'description',
        content: config.description || ''
      },
      { hid: 'keywords', name: 'keywords', content: config.keywords || '' }
    ]
    return {
      list: models,
      page: pageInfo
    }
  },
  components: {
      Index
  }
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
  width: 300px;
  margin: 0 auto;
}
</style>
