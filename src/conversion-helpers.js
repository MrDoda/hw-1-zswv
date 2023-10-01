export const hexToDecimal = (hexStr) => {
  const hexDigits = '0123456789ABCDEF'
  hexStr = hexStr.toUpperCase()
  let decimal = 0

  for (let i = 0; i < hexStr.length; i++) {
    decimal = decimal * 16 + hexDigits.indexOf(hexStr[i])
  }

  return decimal
}

export const binaryToDecimal = (binStr) => {
  return parseInt(binStr, 2)
}

export const decimalToHex = (decimal) => {
  const hexDigits = '0123456789ABCDEF'
  let hex = ''

  while (decimal > 0) {
    hex = hexDigits[decimal % 16] + hex
    decimal = Math.floor(decimal / 16)
  }

  return hex || '0'
}

export const decimalToBinary = (decimal) => {
  let binary = ''

  while (decimal > 0) {
    binary = (decimal % 2) + binary
    decimal = Math.floor(decimal / 2)
  }

  return binary || '0'
}
