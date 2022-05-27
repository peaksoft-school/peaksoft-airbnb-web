/* eslint-disable import/no-cycle */
import { SERVER_BASE_URL } from '../../api/fetchApi'

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
export const mergePhotosLinksIntoServerBaseUrl = (linkPhoto) => {
   return `${SERVER_BASE_URL}/${linkPhoto}`
}
export const getSomeGiven = (example, data, value) => {
   try {
      const item = data && data.find((el) => el[value] === example)
      return item
   } catch (error) {
      console.log(error.message)
   }
}

export const paramsSet = (value, key, setParams, params) => {
   params.set(key, value)
   setParams(params)
   if (value === '') {
      params.delete(key)
      setParams(params)
   }
}
export const getParams = (key, mode = 'get') => {
   const url = new URLSearchParams(window.location.search)
   if (mode === 'values') {
      const value = url.values()
      return value
   }
   if (mode === 'get') {
      const value = url.get(key)
      return value
   }
}
