/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
import { SERVER_BASE_URL } from '../../api/fetchApi'
import { REGIONS } from '../constants/general'

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
      return getDatesRange(new Date(el.checkInDate), new Date(el.checkOutDate))
   })
   const selectedDays = []
   for (let i = 0; i < newDate.length; i++) {
      newDate[i].map((el) => selectedDays.push(el))
   }
   return selectedDays
}
export const getImageFullUrl = (linkPhoto) => {
   return `${SERVER_BASE_URL}/${linkPhoto}`
}
export const getSomeGiven = (example, data, value) => {
   try {
      const item = data && data.find((el) => el[value] === example)
      return item || null
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
export function getNumberOfDays(start, end) {
   const startDate = new Date(start)
   const endDate = new Date(end)

   const oneDay = 1000 * 60 * 60 * 24

   const diffInTime = endDate.getTime() - startDate.getTime()

   const diffInDays = Math.round(diffInTime / oneDay)

   return diffInDays
}

export const convertDateInToString = (date) => {
   const month = date.toLocaleString('en-US', { month: 'long' })
   const day = date.toLocaleString('en-US', { day: '2-digit' })
   const year = date.getFullYear()
   const dateString = `${month} ${day} ${year}`

   return dateString
}

export const validateDateCreditCard = (value) => {
   const currentDate = new Date()
   const currentMonth = currentDate.getMonth() + 1
   const currentYear = currentDate.getFullYear().toString().substr(-2)
   const dateInput = value.split('/')
   const expireMonth = Number(dateInput[0])
   const expireYear = Number(dateInput[1])

   if (
      Number(currentYear) <= expireYear &&
      currentMonth <= expireMonth &&
      expireMonth <= 12
   ) {
      return true
   }
   return 'enter a valid date'
}

export const padTo2Digits = (value) => {
   return value.toString().padStart(2, '0')
}
export const formatDate = {
   DD_MM_YYYY: (date) => {
      const newDate = new Date(date)
      return [
         padTo2Digits(newDate.getDate()),
         padTo2Digits(newDate.getMonth() + 1),
         newDate.getFullYear(),
      ].join('-')
   },
   YYYY_MM_DD: (date) => {
      const newDate = new Date(date)
      return [
         newDate.getFullYear(),
         padTo2Digits(newDate.getMonth() + 1),
         padTo2Digits(newDate.getDate()),
      ].join('-')
   },
   MONTH_DD_YYYY: (date) => {
      const newDate = new Date(date)
      const month = newDate.toLocaleString('en-US', { month: 'long' })
      const day = newDate.toLocaleString('en-US', { day: '2-digit' })
      const year = newDate.getFullYear()
      const dateString = `${month} ${day} ${year}`

      return dateString
   },
}

export const getRegionByCoordinates = (locations) => {
   console.log(locations)
   const location = Object.values(locations.features[0].properties).filter(
      (el) => typeof el === 'string'
   )
   console.log(location)
   const name = (el) => location.find((d) => d.includes(el))

   const findedRegion = REGIONS.find((el) => name(el))

   const result = REGIONS.find((el) => findedRegion.includes(el))

   return result
}
