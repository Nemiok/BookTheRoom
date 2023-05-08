import { Button } from '@vkontakte/vkui'
import { useDispatch } from 'react-redux'
import { setPopoutState } from '../../../../../redux-store/reducers/popoutStateReducer'

// кнопка, которая инициализирует отправку данных формы
const SubmitButton = () => {

  const dispatch = useDispatch()

  const handleSubmitButton = () => {
    dispatch(setPopoutState(true))
  }

  return (
    <Button size="l" stretched onClick={handleSubmitButton}>
      Отправить
    </Button>
  )
}

export default SubmitButton