interface ICreateNumbersArrayArgs {
  startNumber: number,
  lastNumber: number
}

// функция createNumbersArray создаёт массив из чисел в заданном диапазоне (включительно)
// удобна при большом количестве этажей или комнат

function createNumbersArray({ startNumber, lastNumber }: ICreateNumbersArrayArgs): number[] {

  const NumbersArray = []

  for (let counter = startNumber++; counter <= lastNumber; counter++) {
    NumbersArray.push(counter)
  }

  return NumbersArray
}

export default createNumbersArray