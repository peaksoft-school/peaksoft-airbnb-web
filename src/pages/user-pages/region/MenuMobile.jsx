import React from 'react'
import styled from 'styled-components'
import Drawer from '../../../components/UI/drawer/Drawer'
import Title from '../../../components/UI/typography/Title'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import RadioButton from '../../../components/UI/buttons/RadioButton'
import Grid from '../../../components/UI/ui-for-positions/Grid'
import Checkbox from '../../../components/UI/checkbox/Checkbox'

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

const MenuMobile = (props) => {
   return (
      <Drawer {...props}>
         <Flex margin="10px 0 30px 0">
            <Title size="19px">Filter</Title>
         </Flex>
         <Flex gap="12px" direction="column">
            <Title>Sort by</Title>
            <Flex margin="0 0 20px 0" direction="column" gap="10px">
               {sortByPopular.map((el) => (
                  <Label key={el.label}>
                     <Checkbox type="checkbox" />
                     {el.label}
                  </Label>
               ))}
            </Flex>
            <Title>Price</Title>
            <Flex margin="0 0 20px 0" direction="column" gap="10px">
               {sortByPrice.map((el) => (
                  <Label key={el.label}>
                     <RadioButton />
                     {el.label}
                  </Label>
               ))}
            </Flex>
            <Title>Type</Title>
            <Flex margin="0 0 20px 0" direction="column" gap="10px">
               {sortByType.map((el) => (
                  <Label key={el.label}>
                     <Checkbox />
                     {el.label}
                  </Label>
               ))}
            </Flex>
            <Title>Region</Title>
            <Grid gap="15px" columns="1fr 1fr">
               {sortByRegion.map((el) => (
                  <Label key={el.label}>
                     <Checkbox />
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
export default MenuMobile
