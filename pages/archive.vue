<template>
  <div>
    <div class="archive" v-for="item in list">
      <div class="title">{{ item.year }}</div>
      <ul>
        <nuxt-link :to="'/detail/'+ item1.id" style="text-decoration:none;color: #1b1f23" v-for="item1 in item.data" :key="item1.id">
          <li class="content" >
            <span> {{ item1.title }}</span>
            <span>{{ getLastDate(item1.createTime) }}</span>
          </li>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchArchiveGroupYearList } from '~/api/index'
export default {
  name: 'archive',
  async asyncData({ app, store, params }) {
    let result = await fetchArchiveGroupYearList(app.$axios.$request)

    let map = {},
      dest = []
    result.models.forEach(item => {
      if (!map[item.year]) {
        let arr = new Array()
        arr.push(item)
        dest.push({
          year: item.year,
          data: [item]
        })
        map[item.year] = item.year
      } else {
        for (let j = 0; j < dest.length; j++) {
          let dj = dest[j]
          if (dj.year === item.year) {
            dj.data.push(item)
            break
          }
        }
      }
    })

    return {
      list: dest,
      title: '归档' + '-' + store.state.config.name
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  methods: {
    getLastDate: function(time) {
      const date = new Date(time)
      const month =
        date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1
      const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      return date.getFullYear() + '-' + month + '-' + day
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
    font-size: 25px;
    color: #999;
  }

  .content {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
}
</style>
