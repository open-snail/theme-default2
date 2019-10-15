<template>
  <div>
    <div class="headers">
      <div class="avatar">
        <el-avatar :size="150"/>
        <span class="name">Name</span>
      </div>
    </div>
    <el-row :gutter="20" type="flex" align="middle" class="header-tab">
      <el-col :span="14" :offset="5">
        <div class="tabs">
          <span class="tab-item">
            <span v-for="(tab, index) in tabs" :key="index" @click="changeTabClick(tab)">
              <el-link
                class="tab"
                :class="{ active: index === curIndex }"
                @click="curIndex = index"
              >
                {{ tab }}
              </el-link>
            </span>
          </span>

          <input
            class="input"
            placeholder="请输入内容"
            style=" width: 200px;margin-left: 400px;background-color: transparent;border-radius: 10px;border: 1px solid #999"
          />
          <i
            @click="friendlyClick"
            class="iconfont icon-github"
            style="font-size: 28px;text-align: center"
          ></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      curIndex: 0,
      tabs: ['首页', '标签', '归档', '关于']
    }
  }, methods: {
    friendlyClick() {
      this.$router.push({ name: 'friend' })
    },
    changeTabClick(item) {
      const exeFn = {
        '首页': () => {
          this.$router.push('/')
        },
        '标签': () => {
          this.$router.push({ name: 'tags' })
        },
        '归档': () => {
          this.$router.push({ name: 'archive' })
        },
        '关于': () => {
          this.$router.push({ name: 'about' })
        }
      }
      exeFn[item]()
    }
  }
}
</script>

<style scoped lang="scss">
  .headers {
    padding: 0;
    margin: 0;
    background-image: url('~assets/images/logo.jpg');
    position: relative;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    .avatar {
      text-align: center;

      .name {
        padding: 10px;
        display: block;
      }
    }
  }

  .header-tab {
    margin-top: -50px;

    .tabs {
      display: flex;
      justify-content: space-between;

      .tab-item {

        .tab {
          font-size: 20px;
          padding: 5px;
        }
        .tab:hover{
          color: black;

        }
      }

      .active {
        /*border-bottom: 4px solid black;*/
        /*border-bottom-width: 5px;*/
      }
    }
  }
</style>
