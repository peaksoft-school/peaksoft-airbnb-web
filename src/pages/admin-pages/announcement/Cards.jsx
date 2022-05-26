import React from 'react'
import { useNavigate } from 'react-router-dom'
import AdminCard from '../../../components/admin-card/AdminCard'

const Cards = ({ listings = [] }) => {
   const navigate = useNavigate()
   const transitionInnerPage = (id) => {
      navigate(`${id}`)
   }
   return (
      listings.length > 0 &&
      listings.map((el) => (
         <AdminCard
            onClick={() => transitionInnerPage(el.id)}
            images={el.images}
            isViewed={el.isViewed}
            price={el.price}
            address={el.address}
            title={el.title}
            rating={el.rating}
            maxNumberOfGuests={el.maxNumberOfGuests}
         />
      ))
   )
}

export default Cards
