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
/* eslint-disable no-plusplus */
export const getExcludedDates = (bookings) => {
   function getDatesRange(startDate, stopDate) {
      const ONE_DAY = 24 * 3600 * 1000
      const days = []
      let currentDate = new Date(startDate)
      while (currentDate <= stopDate) {
         days.push(new Date(currentDate))
         currentDate = currentDate - 1 + 1 + ONE_DAY
      }
      return days
   }
   const newDate = bookings.map((el) => {
      return getDatesRange(new Date(el.startDate), new Date(el.endDate))
   })
   const selectedDays = []
   for (let i = 0; i < newDate.length; i++) {
      newDate[i].map((el) => selectedDays.push(el))
   }
   return selectedDays
}
