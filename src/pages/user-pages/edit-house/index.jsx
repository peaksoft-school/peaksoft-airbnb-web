import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import BookForm from '../../../components/book-form/BookForm'
import { uploadImageListing } from '../../../store/listingSlice'

const EditListing = () => {
   const { homeId } = useParams()
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const navigateAfterSuccessUpload = () =>
      navigate(`/profile/my-announcements/${homeId}`)

   const getDataHandler = (data, files) => {
      const listing = {
         dataListing: {
            ...data,
            price: Number(data.price),
            maxNumberOfGuests: Number(data.maxNumberOfGuests),
         },
         imagesListing: files,
         navigateAfterSuccessUpload,
         id: homeId,
         isUpdate: true,
      }
      dispatch(uploadImageListing(listing))
   }

   return <BookForm isUpdate onGetData={getDataHandler} />
}

export default EditListing
