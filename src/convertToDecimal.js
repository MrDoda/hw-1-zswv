import { valueOfACharacter } from './constants.js'

export const convertToDecimal = ({ number, base }) => {
  const stringNumber = number.toLowerCase()
  let decimalValue = 0
  let baseExponent = 0
  const baseNumber = parseInt(base)

  for (let i = stringNumber.length - 1; i >= 0; i--) {
    decimalValue +=
      valueOfACharacter[stringNumber[i]] * baseNumber ** baseExponent
    baseExponent++
  }

  return decimalValue
}
