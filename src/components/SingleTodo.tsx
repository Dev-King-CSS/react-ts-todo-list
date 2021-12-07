import { FC, FormEvent, useState } from "react"
import { SingleTodoProps } from "../interfaces"
import { MdDone, MdDelete, MdEdit } from "react-icons/md"

const SingleTodo: FC<SingleTodoProps> = ({
  todo,
  todos,
  setTodos,
}: SingleTodoProps): JSX.Element => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

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

  const handleEdit = (e: FormEvent, id: number) => {
    e.preventDefault()
    const spaceRegex = /^\s*$/i
    if (spaceRegex.test(editTodo)) {
      return alert(
        `You cannot leave the todo empty! Delete it if you don't want it to be present.`
      )
    }
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, todo: editTodo } : todo
      )
    )
    setEdit(false)
  }

  return (
    <>
      <form
        className="todos__single"
        onSubmit={e => {
          handleEdit(e, todo.id)
        }}
      >
        {edit ? (
          <input
            type="text"
            value={editTodo}
            onChange={({ target }) => {
              setEditTodo(target.value)
            }}
            className="todos__single-edit"
          />
        ) : todo.isDone ? (
          <s className="todos__single-text">{todo.todo}</s>
        ) : (
          <span className="todos__single-text">{todo.todo}</span>
        )}

        <div className="icons">
          <span
            className="icon"
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit)
              }
            }}
          >
            <MdEdit />
          </span>
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
