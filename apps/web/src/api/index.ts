// type RequestBodyType = Record<string, any>
// type RequestQueryType = Record<string, any>
type ResponseType<T> = T

const API_HOST = process.env.NEXT_PUBLIC_API_HOST
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION
const API_BASE_PATH = process.env.NEXT_PUBLIC_API_BASE_PATH

const BASE_URL = `${API_HOST}/${API_VERSION}/${API_BASE_PATH}`

// Standard variation
export async function api<T, K = any>(url: string, method: string = 'GET', data?: K): Promise<ResponseType<T>> {
  try {
    // Todo : 나중에 쿠키설정으로 변경
    const headers = {
      'Content-Type': 'application/json',
      // Authorization: 'Bearer ' + (isHook ? (process.env.ADMIN_API_TOKEN as string) : au),
    }
    const response = await fetch(BASE_URL + url, { method, body: JSON.stringify(data), headers })
    const body = await response.text()
    return JSON.parse(body) as Promise<ResponseType<T>>
  } catch (error: any) {
    if (
      error.message.includes('Unexpected') && //
      error.message.includes('JSON')
    ) {
      return {} as Promise<ResponseType<T>>
    }

    throw error
  }
}
