<template>
  <div>
    <div class="headers">
      <div class="avatar">
        <el-avatar :size="150" :src="masterUserInfo.avatar" />
        <span class="name">{{ masterUserInfo.name }}</span>
      </div>
    </div>
    <el-row :gutter="20" type="flex" align="middle" class="header-tab">
      <el-col :span="14" :offset="5">
        <div class="tabs">
          <span class="tab-item">
            <span
              v-for="(tab, index) in tabs"
              :key="index"
              @click="changeTabClick(tab)"
            >
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
          <el-tooltip
            class="item"
            effect="dark"
            content="点击跳转Github"
            placement="top-start"
          >
            <i
              @click="friendlyClick"
              class="iconfont icongithub"
              style="font-size: 28px;text-align: center;cursor: pointer"
            ></i>
          </el-tooltip>

          <el-tooltip
            class="item"
            effect="dark"
            content="点击复制邮箱"
            placement="top-start"
          >
            <i
              @click="copyEmail"
              class="iconfont iconyouxiang"
              style="font-size: 28px;text-align: center;cursor: pointer"
            ></i>
          </el-tooltip>
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
      tabs: ['首页', '标签', '归档', '关于', '友情链接'],
      masterUserInfo: this.$store.state.masterUserInfo,
      keywords: null,
    }
  },
  methods: {
    copyEmail() {
      this.$copyText(this.masterUserInfo.email).then(() => {
        this.$message.success('复制到剪切板成功!')
      })
    },
    friendlyClick() {
      window.location.href = this.masterUserInfo.htmlUrl
    },
    changeTabClick(item) {
      const exeFn = {
        首页: () => {
          this.$router.push('/')
        },
        标签: () => {
          this.$router.push({ name: 'tags' })
        },
        归档: () => {
          this.$router.push({ name: 'archive' })
        },
        关于: () => {
          this.$router.push({ name: 'about' })
        },
        友情链接: () => {
          this.$router.push({ name: 'friend' })
        }
      }
      exeFn[item]()
    },
    search(){
        this.$store.commit("SET_KEYWORDS", this.keywords)
    }
  }
}
</script>

<style scoped lang="scss">
.headers {
  padding: 0;
  margin: 0;
  background-image: url('~assets/images/logo.jpg');
  background-color: transparent;
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

      .tab:hover {
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
