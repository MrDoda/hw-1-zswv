import { valueOfACharacter } from './constants.js'

export const isBaseConversionInputValid = (input) => {
  if (typeof input !== 'object') return false

  if (
    typeof input.base !== 'string' ||
    typeof input.desiredBase !== 'string' ||
    typeof input.number !== 'string'
  )
    return false

  for (const char of input.number.toLowerCase()) {
    if (valueOfACharacter[char] === undefined) {
      return false
    }
  }
  try {
    const numberBase = parseInt(input.base)
    const numberDesiredBase = parseInt(input.desiredBase)

    if (
      numberBase < 1 ||
      numberBase > 36 ||
      numberDesiredBase < 1 ||
      numberDesiredBase > 36
    )
      return false
  } catch {
    return false
  }

  return true
}
