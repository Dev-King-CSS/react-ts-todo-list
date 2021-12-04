import { FC } from "react"
import { TodoListProps } from "../interfaces"
import SingleTodo from "./SingleTodo"

const TodoList: FC<TodoListProps> = ({
  todos,
  setTodos,
}: TodoListProps): JSX.Element => {
  return (
    <>
      <div className="todos">
        {todos.map(todo => (
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </>
  )
}

export default TodoList
