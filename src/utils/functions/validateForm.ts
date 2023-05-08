import { DatePickerDateFormat } from "@vkontakte/vkui";
import { IFormState } from "../../redux-store/reducers/formStateReducer";
import processDate from "./processDate";

const validateBookingDate = (date: DatePickerDateFormat, endTime: { hours: string, minutes: string }, startTime: { hours: string, minutes: string }) => {

  if (Object.values(date).includes(0) || Object.values(endTime).includes('') || Object.values(startTime).includes('')) return 'Выберите дату и время позднее, чем сейчас'

  const startTimeHours = Number(startTime.hours)
  const startTimeMinutes = Number(startTime.minutes)
  const endTimeHours = Number(endTime.hours)
  const endTimeMinutes = Number(endTime.minutes)

  const { D } = processDate(`${date.month}-${date.day}-${date.year}`)
  const currentDate = new Date();

  if (currentDate > D) return 'Выберите день позднее, чем сейчас'

  if (startTimeHours > endTimeHours || (startTimeHours >= endTimeHours && startTimeMinutes >= endTimeMinutes)) return 'Выберите время окончания позже времени начала'
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

  const validatedDate = validateBookingDate(formData.date, formData.endTime, formData.startTime)
  if (validatedDate.length > 0) {
    errorMessagesList.push(validatedDate)
  }

  if (formData.isAgree === false) {
    errorMessagesList.push('Согласитесь с условиями бронирования')
  }

  return errorMessagesList
}

export default validateForm