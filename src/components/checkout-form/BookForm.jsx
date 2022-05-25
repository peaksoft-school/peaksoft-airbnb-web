import React from 'react'
import Button from '../UI/buttons/Button'
import Modal from '../UI/modal/Modal'
import Input from '../UI/text-fields/Input'
import Text from '../UI/typography/Text'
import Title from '../UI/typography/Title'
import Flex from '../UI/ui-for-positions/Flex'
import styled from 'styled-components'
import dateIcon from '../../assets/icons/payment.svg'
import InputMask from 'react-input-mask'

const BookForm = ({ onClose, isVisible }) => {
   return (
      <Modal width="475px" onClose={onClose} isVisible={isVisible}>
         <Flex justify="center" direction="column" align="center">
            <Flex margin="0 0 24px 0">
               <Title size="18px" uppercase>
                  Book your trip
               </Title>
            </Flex>
            <WrapperText width="100%" justify="center" margin="0 0  20px 0">
               <Text>
                  Enter your payment information to book the listing from the
                  between April 28th 2022 to April 30th 2022 inclusive.
               </Text>
            </WrapperText>
            <hr width="100%" color="#d3d3d3" />
            <Flex margin="24px 0 14px 0">
               <Title>
                  <Text>$240.04 x 3 days =</Text>$ 717.09
               </Title>
            </Flex>
            <Flex margin="0 0 16px 0">
               <Title>Total = $752.94</Title>
            </Flex>
            <Flex width="100%" margin="0 0 22px 0">
               <WrapperInput>
                  <Img src={dateIcon} />
                  <Flex width="100%">
                     <InputMask
                        maskChar="0"
                        width="70%"
                        placeholder="Card Number"
                        mask="9999 9999 9999 9999"
                     >
                        {(inputProps) => <InputBook {...inputProps} />}
                     </InputMask>
                     <InputMask
                        mask="99/99"
                        className="dd"
                        width="70px"
                        placeholder="dd/mm"
                     >
                        {(inputProps) => <Input {...inputProps} />}
                     </InputMask>
                     <InputMask
                        mask="999"
                        className="cvc"
                        width="70px"
                        placeholder="CVC"
                     >
                        {(inputPops) => <Input {...inputPops} />}
                     </InputMask>
                  </Flex>
               </WrapperInput>
            </Flex>
            <Flex width="100%">
               <Button width="100%">Book</Button>
            </Flex>
         </Flex>
      </Modal>
   )
}
const WrapperText = styled(Flex)`
   text-align: center;
`
const Img = styled.img`
   position: absolute;
   top: 12px;
   left: 14px;
   z-index: 2;
   overflow: hidden;
`
const WrapperInput = styled.div`
   position: relative;
   /* width: 100%; */
   /* border: 2px solid black; */

   .dd {
      border-left: none;
      border-right: none;
   }
   .cvc {
      border-left: none;
   }
   .dd:focus,
   .dd:hover {
      border-top: 1px solid #c4c4c4;
      border-bottom: 1px solid #c4c4c4;
      box-shadow: none;
   }
   .cvc:focus,
   .cvc:hover {
      border-top: 1px solid #c4c4c4;
      border-bottom: 1px solid #c4c4c4;
      border-right: 1px solid #c4c4c4;
      box-shadow: none;
   }
   input {
      ::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
         display: none;
         -webkit-appearance: none;
         margin: 0;
      }
   }
`
const InputBook = styled(Input)`
   padding-left: 50px;
   border-right: none;
   :focus,
   :hover {
      border-bottom: 1px solid #c4c4c4;
      border-top: 1px solid #c4c4c4;
      border-left: 1px solid #c4c4c4;
      border-right: none;
      box-shadow: none;
   }
`

export default BookForm
