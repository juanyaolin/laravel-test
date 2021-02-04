<template>
  <div class="form">
    <div class="">
      <label for="">Username:</label>
      <input type="text" v-model="form.name" placeholder="Username" />
    </div>
    <div class="">
      <label for="">Password:</label>
      <input type="text" v-model="form.password" placeholder="Password" />
    </div>
    <div>
      <input type="checkbox" v-model="useCsrf" />
      Use CSRF
    </div>
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {},
      useCsrf: false
    };
  },
  methods: {
    login() {
      console.log("login btn");
      console.log(this.form);

      if (this.useCsrf) {
        this.$axios.get("http://api.dr-smoking.org:21080/sanctum/csrf-token");
      }
      this.$axios
        .post("http://api.dr-smoking.org:21080/api/login")
        .then(res => {
          console.log(res);
        })
        .catch(e => {
          console.error(e);
        });
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.form {
  & > * {
    display: block;
    margin: 1rem;
  }

  label {
    margin-right: 1rem;
  }
}
</style>
