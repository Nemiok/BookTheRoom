import {
  FormItem,
  DateInput,

} from '@vkontakte/vkui';
import { setBookDate } from '../../../../../redux-store/reducers/formStateReducer';
import { useAppDispatch, useAppSelector } from '../../../../../redux-store/hooks';

// компонент позволяет выбрать дату и время.
// выбор времени на мобильных устройствах может быть ограничен ввиду особенностей билиотеки компонентов VK UI
const BookingDatePicker = () => {

  const dispatch = useAppDispatch()
  const selectedDate = useAppSelector(state => state.formData.date)

  const handleDateChange = (newDate: Date) => {
    dispatch(setBookDate(newDate))
  }

  return (
    <FormItem top="Дата бронирования*">
      <DateInput
        value={selectedDate}
        onChange={(newDate: Date) => handleDateChange(newDate)}
        enableTime={true}
        disablePast={true}
      />
    </FormItem>
  )
}

export default BookingDatePicker