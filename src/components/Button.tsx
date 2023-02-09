import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  outline?: boolean
  innerClassName?: string
}

const Button = ({ label, outline, disabled, innerClassName, ...rest }: Props) => {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={`${innerClassName} outline-0 border-[1px] rounded-2xl py-2 px-10 ${
        disabled
          ? 'bg-gray-400 text-white'
          : outline
          ? 'bg-transparent border-emerald-500 cursor-pointer'
          : 'bg-emerald-500 text-white cursor-pointer'
      }`}
    >
      {label}
    </button>
  )
}

export default Button
