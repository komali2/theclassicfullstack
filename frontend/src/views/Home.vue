<template>
  <div class="home">
    <Login @submit="handleSubmit" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from '../components/Login.vue';

@Component({
  components: {
    Login,
  },
})

export default class Home extends Vue {
  public handleSubmit(userData: object): void {
    this.$store.dispatch('register', userData);
  }
}
</script>
