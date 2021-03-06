// eslint-disable-next-line import/no-cycle
import store from '../store'

export const SERVER_BASE_URL =
   'http://ec2-3-73-85-80.eu-central-1.compute.amazonaws.com:8000'

export const fetchApi = async (options) => {
   const { role, token } = store.getState().auth
   try {
      let { path } = options

      const requestOptions = {
         method: options.method || 'GET',
         headers: token
            ? {
                 'Content-Type': 'application/json',
                 Authorization: `Bearer ${token}`,
                 Role: role,
              }
            : { 'Content-Type': 'application/json' },
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

      const response =
         options?.noBaseUrl && options?.noBaseUrl
            ? await fetch(`${path}`, requestOptions)
            : await fetch(`${SERVER_BASE_URL}/${path}`, requestOptions)
      const data = await response.json()

      if (!response.ok) {
         let errorMessage = 'Something went wrong'
         if (data && data.message) {
            errorMessage = data.message
         }
         throw new Error(errorMessage)
      }

      return data
   } catch (e) {
      throw new Error(e.message)
   }
}
