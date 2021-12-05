import { useRef, FC, useEffect } from "react"
import { InputFieldProps } from "../interfaces"

const InputField: FC<InputFieldProps> = ({
  todo,
  setTodo,
  handleAddTodo,
}: InputFieldProps) => {
  // const [key, setKey] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    //TODO: IDK what type should I give to `e`
    function handleFocus(e: any) {
      if (e.key === "/") {
        inputRef.current?.focus()
        e.preventDefault()
      }
    }

    document.addEventListener("keydown", handleFocus)

    return () => {
      document.removeEventListener("keydown", handleFocus)
    }
  }, [])

  return (
    <>
      <form
        className="input"
        onSubmit={e => {
          handleAddTodo(e)
          inputRef.current?.blur()
        }}
      >
        <input
          type="text"
          ref={inputRef}
          value={todo}
          onChange={({ target }) => setTodo(target.value)}
          placeholder="Enter a Task"
          className="input__box"
        />
        <button className="input__submit" type="submit">
          Go
        </button>
      </form>
    </>
  )
}

export default InputField
