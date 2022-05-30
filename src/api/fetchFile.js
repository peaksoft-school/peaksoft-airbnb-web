/* eslint-disable import/no-cycle */
import store from '../store'
import { SERVER_BASE_URL } from '../utils/constants/general'

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
