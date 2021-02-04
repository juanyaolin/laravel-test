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
    <button @click="register">Register</button>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      form: {}
    };
  },
  methods: {
    register() {
      console.log("register btn");
      console.log(this.form);

      this.$axios
        .post("http://api.dr-smoking.org/api/register")
        .then(res => {
          console.log(res);
        })
        .catch(e => {
          console.error(e);
        });
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
