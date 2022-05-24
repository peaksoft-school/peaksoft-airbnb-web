import Title from '../UI/typography/Title'
import Text from '../UI/typography/Text'
import { Link } from 'react-router-dom'

const RequestNotFound = () => {
   return (
      <>
         <Title>Results for City...</Title>
         <Text>
            It appears that no listings have yet been created for City...
         </Text>
         <Text>
            Be the first person to create a{' '}
            <Link to="/submit-an-ad">listing in this area</Link>
         </Text>
      </>
   )
}

export default RequestNotFound
