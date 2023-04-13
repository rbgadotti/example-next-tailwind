import { HTMLAttributes } from "react"

type FormProps = HTMLAttributes<HTMLFormElement> & {

}

const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <div className="space-y-4 [&>div]:border-t-2 [&>div]:border-gray-300 [&>div]:py-5">
      {children}
    </div>
  )
}

export default Form