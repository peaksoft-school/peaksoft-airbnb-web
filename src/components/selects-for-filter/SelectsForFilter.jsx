import React, { useState } from 'react'
import styled from 'styled-components'
import Select from '../UI/select/Select'
import Text from '../UI/typography/Text'
import Title from '../UI/typography/Title'
import Flex from '../UI/ui-for-positions/Flex'
import media from '../../utils/helpers/media'
import { ReactComponent as MenuFilter } from '../../assets/icons/filtermenu.svg'
import SelectsForFilterMobile from './SelectsForFilterMobile'
import {
   SORT_BY_POPULAR,
   SORT_BY_PRICE,
   SORT_BY_REGION,
   SORT_BY_TYPE,
} from '../../utils/constants/general'

const SelectsForFilter = () => {
   const [showDrawer, setShowDrawer] = useState(false)
   const [valueSelects, setValueSelects] = useState({
      region: '',
      homeType: '',
      homePopular: '',
      homePrice: '',
   })
   console.log(valueSelects)
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
                  data={SORT_BY_REGION}
                  name="Sort by"
               />
               <Select
                  onChange={(value) =>
                     setValueSelects({ ...valueSelects, homeType: value })
                  }
                  data={SORT_BY_TYPE}
                  name="Filter by home type"
               />
               <Select
                  onChange={(value) =>
                     setValueSelects({ ...valueSelects, homePopular: value })
                  }
                  data={SORT_BY_POPULAR}
                  name="Sort by"
               />
               <Select
                  onChange={(value) =>
                     setValueSelects({ ...valueSelects, homePrice: value })
                  }
                  data={SORT_BY_PRICE}
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
