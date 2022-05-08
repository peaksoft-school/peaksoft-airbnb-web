/* eslint-disable no-param-reassign */
import { css } from 'styled-components'

const sizes = {
   uhd: 1980,
   widescreen: 1366,
   desktop: 1024,
   tablet: 768,
   mobile: 425,
}
export default Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
   return acc
}, {})
