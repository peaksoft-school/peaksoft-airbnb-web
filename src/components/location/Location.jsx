import React, { useEffect } from 'react'
import styled from 'styled-components'
import Checkbox from '../UI/checkbox/Checkbox'
import { usePosition } from '../../hooks/usePosition'
import { useDispatch, useSelector } from 'react-redux'
import { getRegionByСoordinates } from '../../store/regionSlice'
import { listingActions } from '../../store/listingSlice'
import { useLocation, useNavigate } from 'react-router-dom'

const Location = ({ light }) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { pathname } = useLocation()
   const { longitude, latitude } = usePosition()
   const { region, listing } = useSelector((state) => state)
   const { location } = region
   const { location: locationValue } = listing
   useEffect(() => {
      dispatch(getRegionByСoordinates({ latitude, longitude }))
   }, [latitude, longitude])
   const changeLocationHandler = (e) => {
      const { checked } = e.target
      if (checked) {
         if (pathname === '/main') navigate('/main/regions')
         dispatch(listingActions.locationValue(location))
      } else {
         dispatch(listingActions.locationValue(''))
      }
   }
   return (
      <Label light={!!light}>
         <Checkbox checked={!!locationValue} onChange={changeLocationHandler} />
         Search&nbsp;nearby
      </Label>
   )
}
const Label = styled.label`
   color: ${({ light }) => (light ? '#ededed' : '#2a344d')};
   font-family: 'Inter';
   font-size: ${({ light }) => (light ? '16px' : '14px')};
   display: flex;
   align-items: center;
   gap: 4px;
   margin: 0 20px 0 0;
   height: 30px;
   @media (max-width: 960px) {
      margin: 0;
   }
`

export default Location
