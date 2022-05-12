const SERVER_BASE_URL = 'http://192.168.3.228:8008'
export const fetchApi = async (options) => {
   try {
      let { path } = options

      const requestOptions = {
         method: options.method || 'GET',
         headers: options.headers || { 'Content-Type': 'application/json' },
      }

      if (options.method !== 'GET') {
         requestOptions.body = JSON.stringify(options.body || {})
      }

      if (options.params) {
         const queryParamsStringValue = Object.keys(options.params)
            .map((paramKey) => `${paramKey}=${options.params[paramKey]}`)
            .join('&')
         path = `${path}?${queryParamsStringValue}`
      }

      const response = await fetch(`${SERVER_BASE_URL}/${path}`, requestOptions)

      if (!response.ok) {
         throw new Error('Some thing went wrong')
      }

      return response.json()
   } catch (e) {
      throw new Error(e.message)
   }
}
