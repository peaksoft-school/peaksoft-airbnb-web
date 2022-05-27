import { useState, useEffect } from 'react'

export const usePosition = () => {
   const [position, setPosition] = useState({})
   const [error, setError] = useState(null)

   const onChange = ({ coords }) => {
      // Здесь мы могли бы сохранить весь объект position, но для
      // ясности давайте явно перечислим, какие свойства нас интересуют.
      setPosition({ latitude: coords.latitude, longitude: coords.longitude })
   }

   const onError = (error) => {
      setError(error.message)
   }

   useEffect(() => {
      const geo = navigator.geolocation

      if (!geo) {
         setError('Геолокация не поддерживается браузером')
         return
      }

      // Подписываемся на изменение геопозиции браузера.
      const watcher = geo.watchPosition(onChange, onError)

      // В случае, если компонент будет удаляться с экрана
      // производим отписку от слежки, чтобы не засорять память.
      return () => geo.clearWatch(watcher)
   }, [])

   return { longitude: position.longitude, latitude: position.latitude, error }
}
