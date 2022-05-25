import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as SearchMainIcon } from '../../assets/icons/Frame.svg'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import Input from '../UI/text-fields/Input'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { listingActions } from '../../store/listingSlice'

const InputSearch = () => {
   const dispatch = useDispatch()
   const { pathname } = useLocation()
   const navigate = useNavigate()
   const { searchValue } = useSelector((state) => state.listing)
   const { register, handleSubmit } = useForm({
      defaultValues: {
         address: searchValue || '',
      },
   })
   const searchInput = {
      search: {
         ...register('address', {
            required: false,
         }),
      },
   }
   const submitHandler = (filterBy) => {
      dispatch(listingActions.saveSearchValue({ ...filterBy }))
      if (pathname !== '/main/regions') navigate('/main/regions')
   }

   let search = (
      <FormUserSearch onSubmit={handleSubmit(submitHandler)}>
         <SearchIconWrapper onClick={handleSubmit(submitHandler)}>
            <SearchIconStyled />
         </SearchIconWrapper>
         <Search
            defaultValue={searchValue}
            {...searchInput.search}
            placeholder="Search"
         />
      </FormUserSearch>
   )

   if (pathname === '/main') {
      search = (
         <Form onSubmit={handleSubmit(submitHandler)}>
            <SearchMainIcon onClick={handleSubmit(submitHandler)} />
            <InputSearchMain
               {...searchInput.search}
               placeholder="Region, city , apartment, house..."
            />
         </Form>
      )
   }
   return search
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
