import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as SelectIcon } from '../../../assets/icons/Vector.svg'
import Title from '../typography/Title'
import Flex from '../ui-for-positions/Flex'

const Select = ({ data, onChange, name }) => {
   const [select, setSelect] = useState(false)
   const [selectValue, setSelectValue] = useState(data[0])
   const showSelect = () => {
      setSelect(!select)
   }
   const hideSelect = (event, value) => {
      setSelect(false)
      setSelectValue(value)
      onChange(value)
      event.stopPropagation()
   }
   return (
      <SelectWrapper select={select}>
         <SelectStyled onBlur={() => setSelect(false)} onClick={showSelect}>
            <Flex align="center" justify="space-between">
               <TitleSelect>{name}:</TitleSelect>
               <Flex align="center" gap="1rem">
                  <Title>{selectValue}</Title>
                  <SelectIcon className="icon__select" />
               </Flex>
            </Flex>
            {select && (
               <Selects>
                  {data.map((el) => (
                     <Option onClick={(e) => hideSelect(e, el)} key={el}>
                        <Title>{el}</Title>
                     </Option>
                  ))}
               </Selects>
            )}
         </SelectStyled>
      </SelectWrapper>
   )
}
const SelectWrapper = styled.div`
   width: 300px;
   position: relative;
   .icon__select {
      transition: 0.4s;
      transform: ${({ select }) => (select ? 'rotate(180deg)' : 'rotate(0)')};
   }
`
const TitleSelect = styled(Title)`
   color: #828282;
`
const SelectStyled = styled.button`
   font-size: 16px;
   padding: 10px;
   width: 300px;
   border: 1px solid #c4c4c4;
   background-color: #ffffff;
   box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
   cursor: pointer;
   :hover {
      background-color: #f3f3f3;
   }
`
const Selects = styled.div`
   border: 1px solid #e5e5e5;
   width: 100%;
   position: absolute;
   text-align: left;
   padding: 0.2rem;
   left: 0;
   top: 50px;
`
export const Option = styled.div`
   width: 100%;
   padding: 0.4rem 1rem;
   background-color: white;
   cursor: pointer;
   :hover {
      background: #e5e5e5;
   }
`

export default Select
