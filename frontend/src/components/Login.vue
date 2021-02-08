<template>
  <div class="login">
    <label for="email">
      Email
    <input
      v-model="emailAddress"
      id="email"
      type="email"
      placeholder="example@example.com"
    >
    </label>
    <label for="password">
      Password
      <input
        v-model="password"
        id="password"
        type="password"
      >
    </label>
    <button
      type="button"
      v-on:click="submit"
    >
      Submit
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  private emailAddress = ''

  private password = ''

  @Emit('submit')
  submit() {
    return { emailAddress: this.emailAddress, password: this.password };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
