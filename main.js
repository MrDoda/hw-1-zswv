import { baseConversion } from './src/base-conversion.js'

console.log(
  'This is a demonstration of an algorithm in JS to convert from one base to another.'
)
console.log('Add some example values:')

const exampleValues = [
  { number: 'a', base: '16', desiredBase: '10' },
  { number: '0111001', base: '2', desiredBase: '10' },
  { number: '01100111', base: '2', desiredBase: '16' },
  { number: '256', base: '10', desiredBase: '16' },
  { number: 'AAA', base: '16', desiredBase: '2' },
]

console.log('exampleValues', exampleValues)

for (const exampleValue of exampleValues) {
  const { number, base, desiredBase } = exampleValue

  const convertedValue = baseConversion(exampleValue)
  console.log(
    `Converting (${number})[${base}] into (${convertedValue})[${desiredBase}]`
  )
}
