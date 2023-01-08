<script lang="ts">
export default {
  data() {
    return {
      searchBarValue: "",
      inputDisability: false,
      isLoading: true,
    };
  },
  methods: {
    searchProduct(event: any) {
      if (this.$data.searchBarValue === "") return;
      this.$data.searchBarValue = "";
      this.$data.inputDisability = true;
      setTimeout(() => {
        this.$data.inputDisability = false;
      }, 3000);
    },
  },
};
</script>

<template>
  <div>
    <input
      @keydown.enter="searchProduct"
      type="text"
      placeholder="İhtiyacınız olan ürünü arayın..."
      size="60"
      v-model="searchBarValue"
      v-bind:disabled="inputDisability"
    />
    <button class="btn btn-warning" @click="searchProduct">Ara</button>
  </div>
</template>

<style></style>
