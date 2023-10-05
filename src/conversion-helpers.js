export const hexToDecimal = (hexStr) => {
  const isNumberNegative = hexStr[0] === '-'

  if (isNumberNegative) {
    hexStr = hexStr.substring(1)
  }

  const hexDigits = '0123456789ABCDEF'
  hexStr = hexStr.toUpperCase()
  let decimal = 0

  for (let i = 0; i < hexStr.length; i++) {
    decimal = decimal * 16 + hexDigits.indexOf(hexStr[i])
  }

  if (isNumberNegative) {
    decimal = -1 * decimal
  }

  return decimal
}

export const binaryToDecimal = (binStr) => {
  return parseInt(binStr, 2)
}

export const decimalToHex = (decimal) => {
  const isNumberNegative = decimal < 0

  if (isNumberNegative) {
    decimal = decimal * -1
  }

  const hexDigits = '0123456789ABCDEF'
  let hex = ''
  while (decimal > 0) {
    hex = hexDigits[decimal % 16] + hex
    decimal = Math.floor(decimal / 16)
  }

  if (isNumberNegative) {
    hex = `-${hex}`
  }

  return hex || '0'
}

export const decimalToBinary = (decimal) => {
  const isNumberNegative = decimal < 0

  if (isNumberNegative) {
    decimal = decimal * -1
  }

  let binary = ''

  while (decimal > 0) {
    binary = (decimal % 2) + binary
    decimal = Math.floor(decimal / 2)
  }

  if (isNumberNegative) {
    binary = `-${binary}`
  }

  return binary || '0'
}
