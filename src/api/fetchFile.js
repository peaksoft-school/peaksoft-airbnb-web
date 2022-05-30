/* eslint-disable import/no-cycle */
import store from '../store'

const SERVER_BASE_URL = 'http://ec2-54-175-233-244.compute-1.amazonaws.com:8000'
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
         let errorMessage = 'Some thing went wrong'
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
