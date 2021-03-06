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

   const formSubmitHandler = (data, files, resetForm) => {
      const listing = {
         dataListing: {
            ...data,
            price: Number(data.price),
            maxNumberOfGuests: Number(data.maxNumberOfGuests),
         },
         imagesListing: files,
         navigateAfterSuccessUpload,
         id: homeId,
         resetForm,
      }
      dispatch(uploadImageListing(listing))
   }
   return <BookForm onSubmit={formSubmitHandler} />
}

export default SubmitAnAd
