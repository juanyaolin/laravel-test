<template>
  <div class="box">
    <div class="links">
      <router-link to="/login" exact>Login </router-link>
      <router-link to="/register" exact>Register</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  margin: 2rem;
}
.links {
  & > * {
    margin: 0.5rem;
  }
}
</style>
