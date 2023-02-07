import { ReactElement, ReactNode, useMemo } from 'react'

interface Props {
  amount?: number
  placeholder?: ReactNode | null
}

const LocalizedCurrency = ({ amount, placeholder }: Props) => {
  const localizedCurrency = useMemo(() => {
    try {
      if (!amount) return placeholder
      const intl = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      })
      return intl.format(amount)
    } catch (error) {
      return placeholder || ''
    }
  }, [amount, placeholder])
  return (localizedCurrency as unknown as ReactElement) || null
}

export default LocalizedCurrency
