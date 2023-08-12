export const fetcher = async <T>(input: RequestInfo, init?: RequestInit): Promise<T> => {
  const response = await fetch(input, {
    ...init,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
    },
  })

  if (!response.ok) throw new Error(response.statusText)

  const result = await response.json()

  return result
}
