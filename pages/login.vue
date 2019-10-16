<template>
  <div class="login">
    <div class="login-title">欢迎登陆HELLO <span>BLOG</span></div>
    <div @click="handleLogin">
      <img class="login-img" src="@/assets/images/github.png" alt="" />
    </div>
  </div>
</template>

<script>
import { getOauthLoginByGithub } from '@/api/index'
import openWindow from '@/plugins/open-window'
export default {
  name: 'login',
  async asyncData({ app, store, params }) {
    return {
      title: '登录' + '-' + store.state.config.name
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  methods: {
    handleLogin() {
      getOauthLoginByGithub(this.$axios.$request).then(res => {
        openWindow(res.model.authorizeUrl, '绑定GitHub', 540, 540)
        window.addEventListener('message', this.loginGithubHandel, false)
      })
    },
    loginGithubHandel(e) {
      const { socialId } = e.data
      console.log(e.data)
      if (socialId) {
        this.$store.dispatch('login', e.data).then(res => {
          console.log(res)
          if (res.success === 1) {
            this.$router.push({
              path: '/'
            })
          }
        })
        window.removeEventListener('message', this.loginGithubHandel, false)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  padding-top: 50px;
  text-align: center;
  .login-title {
    font-size: 40px;
    font-weight: bold;
    color: #999999;
  }
  .login-img {
    padding-top: 30px;
    width: 30%;
  }
}
</style>
