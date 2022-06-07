import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as SearchMainIcon } from '../../assets/icons/Frame.svg'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { listingActions } from '../../store/listingSlice'
import Location from '../location/Location'

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
         <SearchMainIcon
            className=".svg"
            onClick={handleSubmit(submitHandler)}
         />
         <InputSearchMain
            autoComplete="off"
            {...searchInput.search}
            placeholder="Region, city , apartment, house..."
         />
         <LocationContainer>
            <Location light="light" />
         </LocationContainer>
      </Form>
   )
}
const LocationContainer = styled.div`
   position: absolute;
   right: 0;
   bottom: -30px;
`

const Form = styled.form`
   max-width: 725px;
   width: 100%;
   height: 42px;
   position: relative;
   margin: 0 auto;
   background-color: white;
   display: flex;
   align-items: center;
   margin-top: 50px;
   & .svg {
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
   font-family: 'Inter';
   letter-spacing: 0.5px;
`

export default InputSearchMainPage
