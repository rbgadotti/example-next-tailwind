import { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label?: string
  description?: string
}

const Input = ({ className = "", name, label, description }:InputProps) => {
  return (
    <div className={`${className} flex flex-col`}>
      {label && <label htmlFor={name} className="font-bold text-sm">{label}</label>}
      <input
        type="text"
        name={name}
        className="border-2 rounded border-gray-300 text-sm px-1 py-1"
      />
      {description && (
      <span className="text-xs text-black text-opacity-80 mt-1">
        {description}
      </span>)}
    </div>
  )
}

export default Input