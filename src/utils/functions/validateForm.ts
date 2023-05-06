import { IFormState } from "../../redux-store/reducers/formStateReducer";

const validateBookingDate = (date: Date) => {
  const dateMS = date.getTime()
  const currDateMS = new Date().getTime()
  if (dateMS <= currDateMS) {
    return 'Установите время и дату позднее, чем сейчас'
  }

  return ''
}

const validateForm = (formData: IFormState) => {
  const errorMessagesList = []

  if (formData.tower === '') {
    errorMessagesList.push('Выберите башню')
  }

  if (formData.floor === '') {
    errorMessagesList.push('Выберите этаж')
  }

  if (formData.room === '') {
    errorMessagesList.push('Выберите переговорную')
  }

  const validatedDate = validateBookingDate(formData.date)
  if (validatedDate.length > 0) {
    errorMessagesList.push(validatedDate)
  }

  if (formData.isAgree === false) {
    errorMessagesList.push('Согласитесь с условиями бронирования')
  }


  return errorMessagesList
}

export default validateForm