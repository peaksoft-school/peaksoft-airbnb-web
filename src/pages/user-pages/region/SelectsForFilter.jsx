import React, { useState } from 'react'
import Select from '../../../components/UI/select/Select'
import Text from '../../../components/UI/typography/Text'
import Title from '../../../components/UI/typography/Title'
import Flex from '../../../components/UI/ui-for-positions/Flex'

const sortByRegion = [
   {
      label: 'All',
      value: 'All',
   },
   {
      label: 'Osh',
      value: 'Osh',
   },
   {
      label: ' Bishkek',
      value: 'Bishkek',
   },
   {
      label: 'Chui',
      value: 'Chui',
   },
   {
      label: 'Naryn',
      value: 'Naryn',
   },
   {
      label: 'Jalalabat',
      value: 'Jalalabat',
   },
   {
      label: 'Issyk-Kul',
      value: 'Issyk-Kul',
   },
   {
      label: 'Talas',
      value: 'Talas',
   },
   {
      label: 'Batken',
      value: 'Batken',
   },
]
const sortByType = [
   {
      label: 'All',
      value: 'All',
   },
   {
      label: 'Apartment',
      value: 'Apartment',
   },
   {
      label: 'House',
      value: 'House',
   },
]
const sortByPopular = [
   {
      label: 'All',
      value: 'All',
   },
   {
      label: 'Popular',
      value: 'Popular',
   },
   {
      label: 'The lastest',
      value: 'The lastest',
   },
]
const sortByPrice = [
   {
      label: 'All',
      value: 'All',
   },
   {
      label: 'Low to high',
      value: 'Low to high',
   },
   {
      label: 'High to low',
      value: 'High to low',
   },
]

const SelectsForFilter = () => {
   const [valueSelects, setValueSelects] = useState({
      region: '',
      homeType: '',
      homePopular: '',
      homePrice: '',
   })
   return (
      <Flex align="center" gap="10px" width="100%" justify="space-between">
         <Title uppercase>
            Naryn <Text>(45)</Text>
         </Title>
         <Select
            onChange={(value) =>
               setValueSelects({ ...valueSelects, region: value })
            }
            data={sortByRegion}
            name="Sort by"
         />
         <Select
            onChange={(value) =>
               setValueSelects({ ...valueSelects, homeType: value })
            }
            data={sortByType}
            name="Filter by home type"
         />
         <Select
            onChange={(value) =>
               setValueSelects({ ...valueSelects, homePopular: value })
            }
            data={sortByPopular}
            name="Sort by"
         />
         <Select
            onChange={(value) =>
               setValueSelects({ ...valueSelects, homePrice: value })
            }
            data={sortByPrice}
            name="Filter by price"
         />
      </Flex>
   )
}

export default SelectsForFilter
