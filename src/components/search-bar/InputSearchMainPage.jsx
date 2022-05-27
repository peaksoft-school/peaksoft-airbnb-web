import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as SearchMainIcon } from '../../assets/icons/Frame.svg'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { listingActions } from '../../store/listingSlice'

const InputSearchMainPage = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { register, handleSubmit } = useForm()
   const searchInput = {
      search: {
         ...register('search', {
            required: false,
         }),
      },
   }
   const submitHandler = (filterBy) => {
      dispatch(listingActions.saveSearchValue({ ...filterBy }))
      navigate('/main/regions')
   }

   return (
      <Form onSubmit={handleSubmit(submitHandler)}>
         <SearchMainIcon onClick={handleSubmit(submitHandler)} />
         <InputSearchMain
            {...searchInput.search}
            placeholder="Region, city , apartment, house..."
         />
      </Form>
   )
}

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

export default InputSearchMainPage
