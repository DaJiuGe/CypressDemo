<template>
  <div class="todo-list">
    <TodoListItem v-for="todo in todoList" :key="todo.id" @change-state="todo.completed = $event.target.checked"
      :todo-item="todo" />
  </div>
</template>

<script setup lang="ts">
import TodoListItem from "./TodoListItem.vue";
import { array } from 'vue-types'
import type { TodoItem } from '../types'

defineProps({
  todoList: array<TodoItem>().def([])
})
</script>

<style scoped>
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>
