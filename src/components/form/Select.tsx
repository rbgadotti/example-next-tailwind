import { InputHTMLAttributes } from "react"

type SelectOptions = {
  label: string
  value: string
}

type SelectProps = InputHTMLAttributes<HTMLSelectElement> & {
  name: string
  label?: string
  description?: string
  options: SelectOptions[]
}

const Select = ({ className = "", name, label, description, options }:SelectProps) => {
  return (
    <div className={`${className} flex flex-col`}>
      {label && <label htmlFor={name} className="font-bold text-sm">{label}</label>}
      <select name={name} className="border-2 rounded border-gray-300 bg-white text-sm px-1 py-1">
        {options.map((option, i) => (<option key={i} value={option.value}>{option.label}</option>))}
      </select>
      {description && (
      <span className="text-xs text-black text-opacity-80 mt-1">
        {description}
      </span>)}
    </div>
  )
}

export default Select