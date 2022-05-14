export const saveToLocalStorage = (key, data) => {
   try {
      localStorage.setItem(key, JSON.stringify(data))
   } catch (error) {
      window.alert(error.message)
   }
}
export const getDataFromLocalStorage = (key) => {
   try {
      return JSON.parse(localStorage.getItem(key))
   } catch (error) {
      window.alert(error.message)
   }
}
export const removeWithKeyFromLocalStorage = (key) => {
   localStorage.removeItem(key)
}
