import React from 'react'
import styled from 'styled-components'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import AdminCard from '../../../components/admin-card/AdminCard'

const Application = () => {
   const data = []
   return (
      <WrapperContainer>
         <TitleApplication>Announcement</TitleApplication>
         <Flex>
            <ContainerList>
               <Flex width="100%" gap="13px" wrap="wrap">
                  {data.map((el) => (
                     <AdminCard
                        images={el.Image}
                        isViewed={false}
                        day={el.day}
                        text={el.text}
                        address={el.address}
                        title={el.title}
                        starRange={el.starRange}
                        guest={el.guest}
                     />
                  ))}
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
   padding: 10px;
`

const ContainerList = styled.div`
   max-width: 1660px;
   width: 100%;
   padding-bottom: 8rem;
`

export default Application
