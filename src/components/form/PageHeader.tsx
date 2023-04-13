import { HTMLAttributes } from "react"

type PageHeaderProps = HTMLAttributes<HTMLDivElement> & {
  title: string
  subtitle?: string
}

const PageHeader = ({ title, subtitle , className = ""}: PageHeaderProps) => {
  return (
    <header className={`${className} my-4`}>
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <p className="mt-1">{subtitle}</p>}
    </header>
  )
}

export default PageHeader