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
      if (this.useCsrf) {
        this.$api
          .get("/sanctum/csrf-cookie")
          .then(res => {
            this.$api
              .post("/login")
              .then(res => {
                console.log(res);
              })
              .catch(e => {
                console.error(e);
              });
          })
          .catch(e => {
            console.error(e);
          });
      } else {
        this.$api
          .post("/login")
          .then(res => {
            console.log(res);
          })
          .catch(e => {
            console.error(e);
          });
      }
    }
  }
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
