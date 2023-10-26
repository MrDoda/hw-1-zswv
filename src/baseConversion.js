import { convertToDecimal } from './convertToDecimal.js'
import { convertToDesiredBase } from './convertToDesiredBase.js'
import { isBaseConversionInputValid } from './isBaseConversionInputValid.js'

/**
 * Converts a number from one base to another.
 *
 * @function
 * @param {Object} params - The conversion parameters.
 * @param {string} params.number - The number to be converted in string representation.
 * @param {string} params.base - The original base of the number. (only between 1 to 36)
 * @param {string} params.desiredBase - The base to which the number should be converted. (only between 1 to 36)
 * @returns {string} - The number represented in the desired base.
 *
 * @example
 *
 * const result = baseConversion({number: 'A', base: '16', desiredBase: '10'});
 * console.log(result);  // Expected output: '10'
 */
export const baseConversion = (params) => {
  const { number, base, desiredBase } = params

  if (!isBaseConversionInputValid(params)) {
    throw new Error(
      "Your parameter doesn't fit the contract. Please read the docs."
    )
  }

  const decimalValue = convertToDecimal({ number, base })

  return convertToDesiredBase({ decimalValue, desiredBase })
}
