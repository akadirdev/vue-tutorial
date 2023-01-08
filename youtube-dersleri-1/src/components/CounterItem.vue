<template>
  <div>
    <h3>{{ counter }}</h3>
    <button class="btn btn-danger" @click="counter--">-</button>
    <button class="btn btn-success" @click="counter++">+</button>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      counter: 0,
    };
  },
};
</script>
