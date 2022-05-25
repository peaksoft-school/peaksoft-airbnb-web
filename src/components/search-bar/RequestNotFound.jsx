/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components'
import Title from '../UI/typography/Title'
import Text from '../UI/typography/Text'
import { Link } from 'react-router-dom'
import Flex from '../UI/ui-for-positions/Flex'
import { getParams } from '../../utils/helpers/general'

const RequestNotFound = () => {
   const a = ['ASC', 'DESC', 'Popular', 'The lastest']
   const valuesParams = Array.from(getParams('', 'values'))
   const filteredValue = valuesParams.filter(
      (value) => value !== a.find((el) => el === value)
   )
   filteredValue.shift()
   const searchText = filteredValue.join(',')

   return (
      <Container>
         <Flex margin="0 0 30px 0">
            <Title className="title" size="18px">
               <b>Results for "{searchText}"</b>
            </Title>
         </Flex>
         <Text className="text">
            It appears that no listings have yet been created for
            <Text className="searchText"> "{searchText}".</Text>
         </Text>
         <br />
         <Text className="text">
            Be the first person to create a &nbsp;
            <Link className="link" to="/submit-an-ad">
               listing in this area!
            </Link>
         </Text>
      </Container>
   )
}

const Container = styled.div`
   max-width: 1200px;
   padding: 30px 10px;

   .title {
      @media (max-width: 600px) {
         font-size: 16px;
      }
   }
   .link {
      font-family: 'Inter';
      font-size: 16px;
      line-height: 19px;
      text-decoration-line: underline;
      color: #266bd3;
      letter-spacing: 0.4px;
      @media (max-width: 600px) {
         font-size: 14px;
      }
   }
   .text {
      letter-spacing: 0.4px;
      font-size: 16px;
      @media (max-width: 600px) {
         font-size: 14px;
      }
   }
   .searchText {
      color: #dd8a08;
      font-size: 16px;
      @media (max-width: 600px) {
         font-size: 14px;
      }
   }
   @media (max-width: 600px) {
      padding: 90px 10px 0 10px;
   }
`

export default RequestNotFound
