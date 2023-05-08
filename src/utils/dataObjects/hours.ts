import createNumbersArray from "../functions/createNumbersArray"

const hours = createNumbersArray({ startNumber: 8, lastNumber: 20 })

const formattedHours = hours.map((hour, i) => {
  if (i <= 1) return '0' + hour
  return String(hour)
})


export default formattedHours