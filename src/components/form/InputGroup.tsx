import { HTMLAttributes } from "react";

type InputGroupProps = HTMLAttributes<HTMLDivElement> & {
  name: string
  label: string
  description?: string
}

const InputGroup = ({ name, label, description, className = "", children }: InputGroupProps) => {
  return (
    <div className={`${className} flex flex-col gap-y-4 sm:flex-row sm:gap-x-10`}>
      <div className="flex flex-1 flex-col text-sm">
        <label htmlFor={name} className="font-bold">
          {label}
        </label>
        {description && <span className="mt-2 text-black text-opacity-80">{description}</span>}
      </div>
      <div className="flex flex-1 flex-col space-y-2">
        {children}
      </div>
    </div>
  )
}

export default InputGroup