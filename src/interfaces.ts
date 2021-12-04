import React from "react"

export interface Todo {
  id: number
  todo: string
  isDone: boolean
}

export interface InputFieldProps {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAddTodo: (e: React.FormEvent) => void
}

export interface TodoListProps {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export interface SingleTodoProps {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
