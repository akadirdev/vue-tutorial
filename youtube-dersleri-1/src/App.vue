<template>
  <AppHeader />
  <div class="text-center">
    <h1>ANA SAYFA</h1>
    <CounterItem></CounterItem>
    <CounterItem></CounterItem>
  </div>
</template>

<script lang="ts">
import CounterItem from "./components/CounterItem.vue";
export default {
  components: {
    CounterItem,
  },
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css";
</style>
