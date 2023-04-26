import { onMounted, ref, computed } from "vue";
import type { TodoItem } from "../types";
import { FilterEnum } from "../types";
import type { Ref } from "vue";

export function useTodoList() {
  const todoList = ref<TodoItem[]>([]);

  const addTodo = (todo: TodoItem) => todoList.value.push(todo);

  const init = async () => {
    const response = await fetch(
      "/api/todo/list"
    );
    const raw = await response.json();
    todoList.value = raw.map((todo: TodoItem) => ({
      id: todo.id,
      content: todo.content,
      completed: todo.completed,
    }));
  };

  onMounted(() => {
    init();
  });

  return {
    todoList,
    addTodo,
  };
}

export function useTodoListFilter(todoList: Ref<TodoItem[]>) {
  const filter = ref<FilterEnum>(FilterEnum.All)

  const filteredTodoList = computed(() => {
    switch (filter.value) {
      case FilterEnum.Done:
        return todoList.value.filter((todo) => todo.completed);
      case FilterEnum.Todo:
        return todoList.value.filter((todo) => !todo.completed);
      default:
        return todoList.value;
    }
  })

  return {
    filter,
    filteredTodoList
  }
}