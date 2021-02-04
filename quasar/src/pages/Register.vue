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
    <div class="">
      <label for="">Password Confirm:</label>
      <input
        type="text"
        v-model="form.password_confirmation"
        placeholder="Password Confirm"
      />
    </div>
    <div>
      <input type="checkbox" v-model="useCsrf" />
      Use CSRF
    </div>
    <button @click="register">Register</button>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      form: {},
      useCsrf: false
    };
  },
  methods: {
    register() {
      console.log("register btn");
      console.log(this.form);

      this.$axios
        .post("http://api.dr-smoking.org:21080/api/register")
        .then(res => {
          console.log(res);
        })
        .catch(e => {
          console.error(e);
        });
    },
    created() {
      if (this.useCsrf) {
        this.$axios.get("http://api.dr-smoking.org:21080/sanctum/csrf-token");
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
