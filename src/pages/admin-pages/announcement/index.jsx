import React, { useEffect } from 'react'
import styled from 'styled-components'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import AdminCard from '../../../components/admin-card/AdminCard'
import { useDispatch, useSelector } from 'react-redux'
import { getListing } from '../../../store/listingSlice'

const Announcement = () => {
   const dispatch = useDispatch()
   const { listings } = useSelector((state) => state.listing)
   const { data } = listings
   useEffect(() => {
      dispatch(getListing())
   }, [])
   return (
      <WrapperContainer>
         <TitleApplication>Announcement</TitleApplication>
         <Flex>
            <ContainerList>
               <Flex width="100%" gap="13px" wrap="wrap">
                  {(data.length > 0 &&
                     data.map((el) => (
                        <AdminCard
                           images={el.images}
                           isViewed={el.isViewed}
                           price={el.price}
                           address={el.address}
                           title={el.title}
                           rating={el.region.title}
                           maxNumberOfGuests={el.maxNumberOfGuests}
                        />
                     ))) || <div>loading</div>}
               </Flex>
            </ContainerList>
         </Flex>
      </WrapperContainer>
   )
}
const TitleApplication = styled.div`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   margin: 25px 0;
   text-transform: uppercase;
   color: #000000;
`
const WrapperContainer = styled.div`
   max-width: 1660px;
   width: 100%;
   margin: 0 auto;
   padding: 130px 10px 10px 10px;
`

const ContainerList = styled.div`
   max-width: 1660px;
   width: 100%;
   padding-bottom: 8rem;
`

export default Announcement
