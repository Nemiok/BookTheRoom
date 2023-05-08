import {
  FormItem,
  DatePicker,
  FormLayoutGroup,
  DatePickerDateFormat,
  Div,

} from '@vkontakte/vkui';
import { useAppDispatch, useAppSelector } from '../../../../../redux-store/hooks';
import CustomSelect from '../СustomSelect';
import formStateNames from '../../../../../utils/nameObjects/formState';
import hours from '../../../../../utils/dataObjects/hours';
import minutes from '../../../../../utils/dataObjects/minutes';
import { setBookDate } from '../../../../../redux-store/reducers/formStateReducer';
import './BookingDatePicker.css'

// компонент позволяет выбрать дату и время.
// выбор времени на мобильных устройствах может быть ограничен ввиду особенностей билиотеки компонентов VK UI
const BookingDatePicker = () => {

  const dispatch = useAppDispatch()
  const date = useAppSelector(state => state.formData.date)
  const selectedStartHours = useAppSelector(state => state.formData.startTime.hours)
  const selectedStartMinutes = useAppSelector(state => state.formData.startTime.minutes)
  const selectedEndHours = useAppSelector(state => state.formData.endTime.hours)
  const selectedEndMinutes = useAppSelector(state => state.formData.endTime.minutes)

  const handleDateChange = (newDate: DatePickerDateFormat) => {

    dispatch(setBookDate(newDate))
  }

  return (
    <FormLayoutGroup mode='vertical'>
      <FormItem top='День бронирования*'>
        <DatePicker
          defaultValue={date}
          min={{ day: 1, month: 1, year: new Date().getFullYear() }}
          max={{ day: 31, month: 12, year: new Date().getFullYear() }}
          onDateChange={(value) => {
            handleDateChange(value)
          }}
          dayPlaceholder="ДД"
          monthPlaceholder="ММММ"
          yearPlaceholder="ГГГГ"
        />
      </FormItem>

      <FormItem style={{ display: 'flex', flexDirection: 'column' }} top='Время начала*'>
        <Div className='datePicker__selectTimeWrapper'>
          <CustomSelect selectID={formStateNames.startTimeHours} label='Часы' arrayOfValuesToSelectFrom={hours} selectedValue={selectedStartHours} />
          <CustomSelect selectID={formStateNames.startTimeMinutes} label='Минуты' arrayOfValuesToSelectFrom={minutes} selectedValue={selectedStartMinutes} />
        </Div>
      </FormItem>

      <FormItem style={{ display: 'flex', flexDirection: 'column' }} top='Время конца*'>
        <Div className='datePicker__selectTimeWrapper'>
          <CustomSelect selectID={formStateNames.endTimeHours} label='Часы' arrayOfValuesToSelectFrom={hours} selectedValue={selectedEndHours} />
          <CustomSelect selectID={formStateNames.endTimeMinutes} label='Минуты' arrayOfValuesToSelectFrom={minutes} selectedValue={selectedEndMinutes} />
        </Div>
      </FormItem>
    </FormLayoutGroup >

  )
}

export default BookingDatePicker