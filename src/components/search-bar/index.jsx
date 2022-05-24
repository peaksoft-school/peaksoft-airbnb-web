import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as SearchMainIcon } from '../../assets/icons/Frame.svg'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import Input from '../UI/text-fields/Input'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { getListings } from '../../store/listingSlice'
import PositionedSnackbar from '../UI/snackbar/Snackbar'
import { useState } from 'react'

const InputSearch = () => {
   const dispatch = useDispatch()
   const { pathname } = useLocation()
   const [showError, setShowError] = useState(false)
   const { register, handleSubmit } = useForm()

   const searchInput = {
      search: {
         ...register('address', {
            required: 'ERROR',
         }),
      },
   }
   const submitHandler = (filterBy) => {
      dispatch(getListings({ filterBy }))
   }

   const onError = () => {
      setShowError(true)
   }

   const onClose = () => {
      setShowError(false)
   }

   let search = (
      <FormUserSearch onSubmit={handleSubmit(submitHandler, onError)}>
         {/* {console.log(showError)} */}
         <SearchIconWrapper onClick={handleSubmit(submitHandler, onError)}>
            <SearchIconStyled />
         </SearchIconWrapper>
         <Search {...searchInput.search} placeholder="Search" />
      </FormUserSearch>
   )

   if (pathname === '/main') {
      search = (
         <Form onSubmit={handleSubmit(submitHandler, onError)}>
            <SearchMainIcon onClick={handleSubmit(submitHandler, onError)} />
            <InputSearchMain
               {...searchInput.search}
               placeholder="Region, city , apartment, house..."
            />
         </Form>
      )
   }
   return (
      <>
         <PositionedSnackbar
            severity="error"
            open={showError}
            message="Some thing wreng wrong"
            title="Ooops ):"
            onClose={onClose}
            delay={setShowError}
         />
         {search}
      </>
   )
}

const SearchIconWrapper = styled.div`
   transform: translateY(-50%);
   position: absolute;
   top: 55%;
   left: 15px;
`
const FormUserSearch = styled.form`
   position: relative;
   width: 100%;
   height: 100%;
   margin: 0 10px;
`
const Form = styled.form`
   max-width: 725px;
   width: 100%;
   height: 42px;
   margin: 0 auto;
   background-color: white;
   display: flex;
   align-items: center;
   margin-top: 100px;
   & svg {
      width: 18.62px;
      height: 18.62px;
      margin: 0 15px 0 15px;
      color: #7d7d7d;
      cursor: pointer;
   }
`
const InputSearchMain = styled.input`
   width: 100%;
   height: 34px;
   border: none;
   font-size: 17px;
   outline: none;
   color: #2c2c2c;
`
const Search = styled(Input)`
   width: 100%;
   margin: 0 10px 0 0;
   padding-left: 45px;
   font-family: 'Inter';
   color: #464666;
   :focus {
      box-shadow: -1px 3px 12px rgba(187, 195, 197, 0.6);
   }
`
const SearchIconStyled = styled(SearchIcon)`
   cursor: pointer;
`
export default InputSearch
