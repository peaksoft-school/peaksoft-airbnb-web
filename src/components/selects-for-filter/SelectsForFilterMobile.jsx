import React, { useState } from 'react'
import styled from 'styled-components'
import Drawer from '../UI/drawer/Drawer'
import Title from '../UI/typography/Title'
import Flex from '../UI/ui-for-positions/Flex'
import RadioButton from '../UI/buttons/RadioButton'
import Grid from '../UI/ui-for-positions/Grid'
import Checkbox from '../UI/checkbox/Checkbox'
import {
   SORT_BY_POPULAR_FOR_MOBILE,
   SORT_BY_PRICE_FOR_MOBILE,
   SORT_BY_REGION_FOR_MOBILE,
   SORT_BY_TYPE_FOR_MOBILE,
} from '../../utils/constants/general'

const SelectsForFilterMobile = (props) => {
   const [categories, setCategories] = useState({
      type: [],
      region: null,
      sortby: [],
      price: null,
   })
   console.log(categories)
   const changeRadioButtonHnadler = (data) => {
      setCategories({ ...categories, ...data })
   }
   const changeCheckboxHandler = ({ event, value }) => {
      const { name, checked } = event.target
      if (checked)
         setCategories({ ...categories, [name]: [...categories[name], value] })

      if (!checked) {
         setCategories({
            ...categories,
            [name]: categories[name].filter((el) => el !== value),
         })
      }
   }
   return (
      <Drawer {...props}>
         <Flex margin="10px 0 30px 0">
            <Title size="19px">Filter</Title>
         </Flex>
         <Flex gap="12px" direction="column">
            <Title>Sort by</Title>
            <Flex margin="0 0 20px 0" direction="column" gap="16px">
               {SORT_BY_POPULAR_FOR_MOBILE.map((el) => (
                  <Label key={el.label}>
                     <Checkbox
                        name="sortby"
                        onChange={(event) =>
                           changeCheckboxHandler({ event, value: el.value })
                        }
                     />
                     {el.label}
                  </Label>
               ))}
            </Flex>
            <Title>Price</Title>
            <Flex margin="0 0 20px 0" direction="column" gap="10px">
               {SORT_BY_PRICE_FOR_MOBILE.map((el) => (
                  <Label key={el.label}>
                     <RadioButton
                        onChange={() =>
                           changeRadioButtonHnadler({ price: el.value })
                        }
                     />
                     {el.label}
                  </Label>
               ))}
            </Flex>
            <Title>Type</Title>
            <Flex margin="0 0 20px 0" direction="column" gap="16px">
               {SORT_BY_TYPE_FOR_MOBILE.map((el) => (
                  <Label key={el.label}>
                     <Checkbox
                        name="type"
                        onChange={(event) =>
                           changeCheckboxHandler({ event, value: el.value })
                        }
                     />
                     {el.label}
                  </Label>
               ))}
            </Flex>
            <Title>Region</Title>
            <Grid gap="15px" columns="1fr 1fr">
               {SORT_BY_REGION_FOR_MOBILE.map((el) => (
                  <Label key={el.label}>
                     <RadioButton
                        onChange={() =>
                           changeRadioButtonHnadler({ region: el.value })
                        }
                     />
                     {el.label}
                  </Label>
               ))}
            </Grid>
         </Flex>
      </Drawer>
   )
}
const Label = styled.label`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   display: flex;
   align-items: center;
   gap: 10px;
`
export default SelectsForFilterMobile
