<template>
  <div class="container">
    <AppHeader />
    <MainHeader />
    <!-- <ul>
      <li v-for="todoItem in todoList" :key="todoItem.id">
        <p>{{ todoItem.text }}</p>
        <button @click="deleteItem(todoItem.id)" class="btn btn-danger">
          Sil
        </button>
      </li>
    </ul>
    <small class="text-right">{{ todoList.length }} adet todo var!</small> -->
  </div>
</template>

<script lang="ts">
export interface ITodoItem {
  id: number;
  text: string;
}

export default {
  data() {
    return {
      todoList: [
        {
          id: 1,
          text: "naber",
        },
      ] as ITodoItem[],
    };
  },
  methods: {
    addNewTodo(event: any) {
      if (event.target.value === "") {
        alert("değer boş!!");
        return;
      }
      this.todoList.push({
        id: new Date().getTime(),
        text: event.target.value,
      });
      event.target.value = "";
      console.log(this.todoList);
    },
    deleteItem(id: number) {
      console.log(id);

      this.todoList = this.todoList.filter((f) => f.id !== id);
    },
  },
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css";
</style>
