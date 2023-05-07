import { Button } from '@vkontakte/vkui'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../../../../redux-store/hooks'
import validateForm from '../../../../../utils/functions/validateForm'
import { clearForm, setFormStatus } from '../../../../../redux-store/reducers/formStateReducer'

interface ISubmitButtonProps {
  openSuccessSnackbar: () => void
}

// кнопка, которая инициализирует отправку данных формы
const SubmitButton = ({ openSuccessSnackbar }: ISubmitButtonProps) => {
  const formData = useAppSelector(state => state.formData)
  const dispatch = useDispatch()

  // функция обработчик нажатия на кнопку использует функцию валидации формы.
  // в случае ошибок, они отображаются в форме
  // в случае успеха появляется уведомление
  const handleSubmitButton = () => {
    const errorsArray = validateForm(formData)

    if (errorsArray.length === 0) {
      openSuccessSnackbar()
      dispatch(clearForm())
    }

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