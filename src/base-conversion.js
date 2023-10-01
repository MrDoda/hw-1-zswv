import {
  binaryToDecimal,
  decimalToBinary,
  decimalToHex,
  hexToDecimal,
} from './conversion-helpers.js'

/**
 * Converts a number from one base to another.
 *
 * @function
 * @param {Object} params - The conversion parameters.
 * @param {string|number} params.number - The number to be converted.
 * @param {string} params.base - The original base of the number.
 * @param {string} params.desiredBase - The base to which the number should be converted.
 * @returns {string} - The number represented in the desired base.
 *
 * @example
 *
 * const result = baseConversion({number: 'A', base: '16', desiredBase: '10'});
 * console.log(result);  // Expected output: '10'
 */
export const baseConversion = ({ number, base, desiredBase }) => {
  // Convert input number to decimal
  let decimalValue

  switch (base) {
    case '2':
      decimalValue = binaryToDecimal(number)
      break
    case '10':
      decimalValue = parseInt(number, 10)
      break
    case '16':
      decimalValue = hexToDecimal(number)
      break
    default:
      decimalValue = parseInt(number, base)
  }

  // Convert decimal to desired base
  switch (desiredBase) {
    case '2':
      return decimalToBinary(decimalValue)
    case '10':
      return decimalValue.toString()
    case '16':
      return decimalToHex(decimalValue)
    default:
      return decimalValue.toString(desiredBase)
  }
}
