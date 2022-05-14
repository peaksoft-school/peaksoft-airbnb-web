import React, { useState } from 'react'
import styled from 'styled-components'
import Select from '../UI/select/Select'
import Text from '../UI/typography/Text'
import Title from '../UI/typography/Title'
import Flex from '../UI/ui-for-positions/Flex'
import media from '../../utils/helpers/media'
import { ReactComponent as MenuFilter } from '../../assets/icons/filtermenu.svg'
import SelectsForFilterMobile from './SelectsForFilterMobile'

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
   const [showDrawer, setShowDrawer] = useState(false)
   const [valueSelects, setValueSelects] = useState({
      region: '',
      homeType: '',
      homePopular: '',
      homePrice: '',
   })
   return (
      <>
         <SelectsForFilterMobile
            isVisible={showDrawer}
            onClose={() => setShowDrawer(false)}
         />
         <Flex wrap="wrap" align="center" justify="space-between" width="100%">
            <Title uppercase>
               Naryn <Text>(45)</Text>
            </Title>
            <FilterMenu onClick={() => setShowDrawer(true)}>
               <Text size="16px">Filter</Text>
               <MenuFilter />
            </FilterMenu>
            <ContainerSelects>
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
            </ContainerSelects>
         </Flex>
      </>
   )
}
const ContainerSelects = styled(Flex)`
   align-items: center;
   gap: 15px;
   flex-wrap: wrap;
   ${media.tablet`
     display:none;
  `}
`
const FilterMenu = styled.div`
   padding: 10px 20px;
   display: flex;
   justify-content: center;
   align-items: center;
   border: 1px solid #c4c4c4;
   border-radius: 2px;
   cursor: pointer;
   opacity: 0.8;
   gap: 20px;
   display: none;
   :hover {
      opacity: 1;
   }
   ${media.tablet`
     display:block;
     display:flex;
  `}
`
export default SelectsForFilter
