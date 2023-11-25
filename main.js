import { baseConversion } from './src/baseConversion.js'

console.log(
  'This is a demonstration of an algorithm in JS to convert from one base to another.'
)
console.log('Add some example values:')

const exampleValues = [
  { number: 'a', base: '16', desiredBase: '10' },
  { number: 'a', base: '16', desiredBase: '10' },
  { number: '011001011', base: '2', desiredBase: '16' },
  { number: '256', base: '10', desiredBase: '16' },
  { number: '3333', base: '10', desiredBase: '16' },
  { number: 'AAA', base: '16', desiredBase: '2' },
  { number: '0111001', base: '2', desiredBase: '10' },
  { number: '32158', base: '10', desiredBase: '16' },
  { number: '010110', base: '2', desiredBase: '10' },
  { number: '22', base: '10', desiredBase: '2' },
  { number: '11', base: '10', desiredBase: '2' },
  { number: '7', base: '10', desiredBase: '1' },
]

for (const exampleValue of exampleValues) {
  const { number, base, desiredBase } = exampleValue

  console.log(`input: ${JSON.stringify(exampleValue)}`)

  // baseConversion is the Homework the rest of the code is for testing
  const convertedValue = baseConversion(exampleValue)

  console.log(
    `Converting (${number})[${base}] into (${convertedValue})[${desiredBase}]`
  )

  // test if our solution works using builtin functions
  try {
    const base10Value = parseInt(exampleValue.number, exampleValue.base)
    const correctConvertedValue = base10Value
      .toString(exampleValue.desiredBase)
      .toLowerCase()

    if (correctConvertedValue !== convertedValue) {
      console.warn('There might be a mistake in your sulution:')
      console.warn(`Given input: ${JSON.stringify(exampleValue)}`)
      console.warn(`Your result: '${convertedValue}'`)
      console.warn(`parseInt/toString result: '${correctConvertedValue}'`)
    }
  } catch {
    console.error(
      "Something went wrong. Maybe the toString/parseInt doesn't know base of 1. Our solution is better?"
    )
  }
}
