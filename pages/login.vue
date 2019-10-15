<template>
  <div class="login">
    <div class="login-title">欢迎登陆HELLO <span>BLOG</span></div>
    <div>
      <img class="login-img"   src="@/assets/images/github.png" alt="">
    </div>

  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped lang="scss">
  .login{
    padding-top: 50px;
    text-align: center;
    .login-title{
      font-size: 40px;
      font-weight: bold;
      color: #999999;
    }
    .login-img{
      padding-top: 30px;
      width: 30%;
    }
  }

</style>
