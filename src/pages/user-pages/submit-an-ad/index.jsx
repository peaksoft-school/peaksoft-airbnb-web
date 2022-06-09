import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import BookForm from '../../../components/book-form/BookForm'
import { uploadImageListing } from '../../../store/listingSlice'

const SubmitAnAd = () => {
   const { homeId } = useParams()
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const navigateAfterSuccessUpload = () => navigate('/main/regions')

   const formSubmitHandler = (data, files) => {
      const listing = {
         dataListing: {
            ...data,
            price: Number(data.price),
            maxNumberOfGuests: Number(data.maxNumberOfGuests),
         },
         imagesListing: files,
         navigateAfterSuccessUpload,
         id: homeId,
      }
      dispatch(uploadImageListing(listing))
   }
   return <BookForm submitHandler={formSubmitHandler} />
}

export default SubmitAnAd
