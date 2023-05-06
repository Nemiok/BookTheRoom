import { Button } from '@vkontakte/vkui'
import { useAppSelector } from '../../../../redux-store/hooks'
import validateForm from '../../../../utils/functions/validateForm'
import { useDispatch } from 'react-redux'
import { setFormStatus } from '../../../../redux-store/reducers/formStateReducer'

// кнопка, которая инициализирует отправку данных формы
const SubmitButton = () => {
  const formData = useAppSelector(state => state.formData)
  const dispatch = useDispatch()

  // функция обработчик нажатия на кнопку использует функцию валидации формы.
  // в случае ошибок, они отображаются в форме
  const handleSubmitButton = () => {
    const errorsArray = validateForm(formData)
    dispatch(setFormStatus(errorsArray))
    console.log(formData)
  }
  return (
    <Button size="l" stretched onClick={handleSubmitButton}>
      Отправить
    </Button>
  )
}

export default SubmitButton