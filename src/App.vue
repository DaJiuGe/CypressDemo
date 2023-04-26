<template>
  <main>
    <div class="container">
      <h1>Todo List</h1>
      <TodoAdd :tid="todoList.length" @add-todo="addTodo" />
      <TodoFilter v-model:selected="filter" />
      <TodoList :todo-list="filteredTodoList" />
    </div>
  </main>
  <TodoList />
</template>

<script setup lang="ts">
import TodoAdd from './components/TodoAdd.vue'
import TodoFilter from './components/TodoFilter.vue'
import TodoList from './components/TodoList.vue'
import { useTodoList, useTodoListFilter } from './hooks/useTodoList';

const { todoList, addTodo } = useTodoList();
const { filter, filteredTodoList } = useTodoListFilter(todoList);
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}

main {
  width: 100vw;
  min-height: 100vh;
  padding: 10vh 0;
  display: grid;
  align-items: start;
  justify-items: center;
  background: #d8dfff;
}

.container {
  width: 60%;
  max-width: 400px;

  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(245, 246, 252);
}

h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}
</style>
