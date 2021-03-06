/* eslint-disable import/no-cycle */
import store from '../store'

const SERVER_BASE_URL =
   'http://ec2-3-73-85-80.eu-central-1.compute.amazonaws.com:8000'

export const fetchFile = async (options) => {
   const { token, role } = store.getState().auth
   try {
      const requestOptions = {
         method: options.method || 'GET',
         headers: { Authorization: `Bearer ${token}`, Role: role },
      }

      if (options.method !== 'GET') {
         requestOptions.body = options.body || {}
      }

      const response = await fetch(
         `${SERVER_BASE_URL}/${options.path}`,
         requestOptions
      )
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
