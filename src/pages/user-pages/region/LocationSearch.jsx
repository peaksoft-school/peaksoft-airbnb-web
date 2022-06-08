import { Flex } from 'gestalt'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ToggleCheckbox from '../../../components/UI/checkbox/ToggleCheckbox'
import { usePosition } from '../../../hooks/usePosition'
import { getRegionByСoordinates } from '../../../store/regionSlice'

const LocationSearch = ({ setFilter, filter }) => {
   const dispatch = useDispatch()
   const { latitude, longitude } = usePosition()
   const { location } = useSelector((state) => state.region)
   const [isLocation, setIsLocation] = useState(false)
   console.log(location)
   const changeLocationHandler = (e) => {
      const { checked } = e.target
      if (checked) {
         setIsLocation(true)
      } else {
         setIsLocation(false)
      }
   }
   useEffect(() => {
      dispatch(getRegionByСoordinates({ latitude, longitude }))
   }, [latitude, longitude])
   useEffect(() => {
      if (isLocation) setFilter({ ...filter, location })
      else setFilter({ ...filter, location: '' })
   }, [isLocation])

   return (
      <Flex width="100%" justify="start" margin="30px 0">
         <ToggleCheckbox
            checked={!!filter.location}
            onChange={changeLocationHandler}
         />
      </Flex>
   )
}

export default LocationSearch
