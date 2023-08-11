interface Props {
  url: string
  options?: Record<string, string>
  init?: RequestInit
}

export const fetcher = async <T>({ url, options, init }: Props): Promise<T> => {
  const response = await fetch(url, {
    ...init,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      ...options,
    },
  })

  if (!response.ok) throw new Error(response.statusText)

  const result = await response.json()

  return result
}
