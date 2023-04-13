import { InputHTMLAttributes } from "react"

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label: string
  description?: string
}

const Checkbox = ({ className = "", name, label, description }:CheckboxProps) => {
  return (
    <div className={`${className} flex flex-row items-start text-sm gap-x-2`}>
      <input type="checkbox" name={name} className="mt-1 accent-primary cursor-pointer" />
      <div>
        <label className="font-bold" htmlFor={name}>{label}</label>
        {description && <span className="block text-black text-opacity-80">{description}</span>}
      </div>
    </div>
  )
}

export default Checkbox