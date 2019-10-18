<template>
  <div>
    <div class="headers">
      <div class="avatar">
        <el-avatar :size="150" :src="masterUserInfo.avatar" />
        <span class="name">{{ masterUserInfo.name }}</span>
      </div>
    </div>
    <el-row class="header-tab tabs">
      <!-- 1 -->
      <el-col
        :xs="{ span: 0, offset: 0 }"
        :sm="{ span: 12, offset: 0 }"
        :md="{ span: 12, offset: 0 }"
        :lg="{ span: 6, offset: 5 }"
        :xl="{ span: 6, offset: 6 }"
      >
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
      </el-col>
      <!-- 2 -->
      <el-col
        :xs="{ span: 4, offset: 6 }"
        :sm="{ span: 3, offset: 2 }"
        :md="{ span: 4, offset: 2 }"
        :lg="{ span: 3, offset: 2 }"
        :xl="{ span: 3, offset: 2 }"
      >
        <el-input class="input" placeholder="查询点什么">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <!-- 3 -->
      <el-col
        :xs="{ span: 6, offset: 6 }"
        :sm="{ span: 2, offset: 3 }"
        :md="{ span: 2, offset: 2 }"
        :lg="{ span: 2, offset: 2 }"
        :xl="{ span: 2, offset: 0 }"
      >
        <el-tooltip
          class="item"
          effect="dark"
          content="点击跳转Github"
          placement="top-start"
        >
          <i
            @click="friendlyClick"
            class="iconfont icongithub"
            style="font-size: 28px;text-align: center"
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
            style="font-size: 28px;text-align: center"
          ></i>
        </el-tooltip>
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
      keywords: null
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
    search() {
      this.$store.commit('SET_KEYWORDS', this.keywords)
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
  height: 50px;
  line-height: 50px;
  margin-top: -50px;

  .input {
    width: 200px;
    font-size: 16px;

    /deep/ .el-input__inner {
      color: #222;
      background-color: transparent;
    }
  }
  /deep/ input::-webkit-input-placeholder {
    color: #222;
  }
  /deep/ input::-moz-input-placeholder {
    color: #222;
  }
  /deep/ input::-ms-input-placeholder {
    color: #222;
  }

  .tabs {
    .tab-item {
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
span /deep/ .el-link--inner {
  font-size: 20px !important;
  padding: 5px;
}
span /deep/ .el-link--inner:hover {
  color: black;
}
</style>
