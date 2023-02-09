import { useController, useFormContext } from 'react-hook-form'
import React, { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name: string
  isError?: boolean
  errorMessage?: string
  removeErrors?: () => void
  commonError?: boolean
  innerClassName?: string
}

const TextInput = ({
  label,
  innerClassName = '',
  name,
  isError,
  errorMessage,
  removeErrors,
  commonError,
  ...rest
}: Props) => {
  const { control } = useFormContext()
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)
    removeErrors && removeErrors()
  }

  return (
    <div className={`flex flex-col gap-2 ${innerClassName}`}>
      {label && <span>{label}</span>}
      <input
        {...rest}
        autoComplete='off'
        className='outline-emerald-500 py-1 px-4 rounded-xl border-emerald-500 border-[1px]'
        value={value}
        onChange={handleChange}
      />
      {error ? (
        <span className='text-red-500 text-sm'>{error.message}</span>
      ) : isError ? (
        <span className='text-red-500 text-sm'>{errorMessage}</span>
      ) : commonError ? (
        <span className='text-red-500 text-sm'>Something went wrong</span>
      ) : null}
    </div>
  )
}

export default TextInput
