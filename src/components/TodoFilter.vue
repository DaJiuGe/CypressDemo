<template>
  <div class="filters">;
    <span v-for="filter in filters" :key="filter.value" @click="emit('update:selected', filter.value)" class="filter"
      :class="{ active: selected === filter.value }">{{ filter.label }}</span>
  </div>
</template>

<script setup lang="ts">
import { string } from 'vue-types'
import type { FilterOption } from '../types'
import { FilterEnum } from '../types'

defineProps({
  selected: string<FilterEnum>().def(FilterEnum.All)
})

const emit = defineEmits<{
  (e: 'update:selected', filter: FilterEnum): void
}>()

const filters: FilterOption[] = [
  { label: "全部", value: FilterEnum.All },
  { label: "已完成", value: FilterEnum.Done },
  { label: "未完成", value: FilterEnum.Todo },
];
</script>

<style scoped>
.filters {
  display: flex;
  margin: 24px 2px;
  color: #c0c2ce;
  font-size: 14px;
  cursor: pointer;
}

.filters .filter {
  margin-right: 14px;
  transition: 0.8s;
}

.filters .filter.active {
  color: #6b729c;
  transform: scale(1.2);
}
</style>
