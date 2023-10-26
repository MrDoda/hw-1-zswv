import { stringRepresentationOfValue } from './constants.js'

export const convertToDesiredBase = ({ decimalValue, desiredBase }) => {
  if (decimalValue === 0) return '0'

  const desiredBaseNumber = parseInt(desiredBase)
  let output = ''

  if (desiredBaseNumber === 1) {
    for (let i = 0; i < decimalValue; i++) {
      output += '1'
    }
    return output
  }

  let remainder = 0

  while (decimalValue > 0) {
    remainder = decimalValue % desiredBaseNumber
    output = stringRepresentationOfValue[remainder] + output
    decimalValue = Math.floor(decimalValue / desiredBaseNumber)
  }

  return output
}
