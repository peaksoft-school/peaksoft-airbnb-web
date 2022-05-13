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
