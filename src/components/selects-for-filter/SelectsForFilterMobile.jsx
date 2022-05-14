import React, { useState } from 'react'
import styled from 'styled-components'
import Drawer from '../UI/drawer/Drawer'
import Title from '../UI/typography/Title'
import Flex from '../UI/ui-for-positions/Flex'
import RadioButton from '../UI/buttons/RadioButton'
import Grid from '../UI/ui-for-positions/Grid'
import Checkbox from '../UI/checkbox/Checkbox'

const sortByRegion = [
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
      label: 'Low to high',
      value: 'Low to high',
   },
   {
      label: 'High to low',
      value: 'High to low',
   },
]

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
               {sortByPopular.map((el) => (
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
               {sortByPrice.map((el) => (
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
               {sortByType.map((el) => (
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
               {sortByRegion.map((el) => (
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
