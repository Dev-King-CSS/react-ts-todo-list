import React, { useState, FormEvent, FC } from "react"
import InputField from "./components/InputField"
import TodoList from "./components/TodoList"
import { Todo } from "./interfaces"
import "./App.css"

const App: FC<{}> = (): JSX.Element => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAddTodo = (e: FormEvent): void => {
    e.preventDefault()

    const spaceRegex = /^\s*$/i

    if (spaceRegex.test(todo)) return setTodo("")
    setTodos([...todos, { id: Date.now(), todo, isDone: false }])
    setTodo("")
  }

  return (
    <>
      <div className="App">
        <span className="heading">Todo List</span>
        <InputField
          todo={todo}
          setTodo={setTodo}
          handleAddTodo={handleAddTodo}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  )
}

export default App
