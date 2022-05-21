import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as SelectIcon } from '../../../assets/icons/Vector.svg'
import Title from '../typography/Title'
import Flex from '../ui-for-positions/Flex'

const Select = React.forwardRef(
   (
      { data, onChange, name, width, label, value, defaultValue, ...props },
      ref
   ) => {
      const [selectToggle, setSelectToggle] = useState(false)
      const [labelValue, setLabelValue] = useState(
         defaultValue || (data && data[0] && data[0][label]) || ''
      )

      const showSelect = () => setSelectToggle(!selectToggle)

      const changeHandler = (event, data) => {
         event.stopPropagation()
         setSelectToggle(false)
         setLabelValue(data[label])
         onChange(data[value], data[label])
      }
      return (
         <SelectWrapper width={width} select={selectToggle}>
            <SelectStyled
               {...props}
               ref={ref}
               onBlur={() => setSelectToggle(false)}
               onClick={showSelect}
            >
               <Flex align="center" justify="space-between">
                  <TitleSelect>{name}:</TitleSelect>
                  <Flex align="center" gap="1rem">
                     <Title size="15px">{labelValue}</Title>
                     <SelectIcon className="icon__select" />
                  </Flex>
               </Flex>
               {selectToggle && (
                  <Options>
                     {data.map((el) => (
                        <Option
                           onClick={(e) => changeHandler(e, el)}
                           key={el[label]}
                        >
                           <Title>{el[label]}</Title>
                        </Option>
                     ))}
                  </Options>
               )}
            </SelectStyled>
         </SelectWrapper>
      )
   }
)
const SelectWrapper = styled.div`
   width: ${({ width }) => width || '300px'};
   position: relative;
   .icon__select {
      transition: 0.4s;
      transform: ${({ select }) => (select ? 'rotate(180deg)' : 'rotate(0)')};
   }
`
const TitleSelect = styled(Title)`
   color: #828282;
   font-size: 15px;
`
const SelectStyled = styled.button`
   font-size: 16px;
   padding: 0.4em 0.6em;
   width: 100%;
   border: ${({ isValid }) =>
      isValid ? ' 1px solid tomato' : '1px solid #c4c4c4'};
   background-color: transparent;
   box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
   cursor: pointer;
   :hover {
      background-color: #f3f3f3;
   }
`
const Options = styled.div`
   border: 1px solid #e5e5e5;
   width: 100%;
   position: absolute;
   text-align: left;
   padding: 0.2rem;
   left: 0;
   top: 50px;
   animation: OPTION 0.4s ease-in-out;
   z-index: 10;
   @keyframes OPTION {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
`
const Option = styled.div`
   width: 100%;
   padding: 0.4rem 1rem;
   background-color: white;
   cursor: pointer;
   :hover {
      background: #e5e5e5;
   }
`

export default Select
