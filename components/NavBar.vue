<template>
  <div class="header">
    <div class="avatar">
      <el-avatar :size="150" />
      <span class="name">Name</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped lang='scss' >
.header {
  background-image: url('~assets/images/logo.jpg');
  position: relative;
  height: 500px;
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
</style>
