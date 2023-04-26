export interface TodoItem {
  id: string
  content: string
  completed: boolean
}

export enum FilterEnum {
  All = 'all',
  Done = 'done',
  Todo = 'todo'
}

export interface FilterOption {
  label: string
  value: FilterEnum
}
