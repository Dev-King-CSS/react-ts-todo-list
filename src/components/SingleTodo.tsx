import { FC } from "react"
import { SingleTodoProps } from "../interfaces"
import { MdDone, MdDelete } from "react-icons/md"

const SingleTodo: FC<SingleTodoProps> = ({
  todo,
  todos,
  setTodos,
}: SingleTodoProps): JSX.Element => {
  const handleDone = (id: number): void => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }

  const handleDelete = (Id: number): void => {
    setTodos(todos.filter(({ id }) => id !== Id))
  }

  return (
    <>
      <form className="todos__single">
        {todo.isDone ? (
          <s className="todos__single-text">{todo.todo}</s>
        ) : (
          <span className="todos__single-text">{todo.todo}</span>
        )}

        <div className="icons">
          <span className="icon" onClick={() => handleDelete(todo.id)}>
            <MdDelete />
          </span>
          <span className="icon" onClick={() => handleDone(todo.id)}>
            <MdDone />
          </span>
        </div>
      </form>
    </>
  )
}

export default SingleTodo
