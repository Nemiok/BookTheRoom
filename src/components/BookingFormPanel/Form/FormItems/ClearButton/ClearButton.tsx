import { Button } from '@vkontakte/vkui'
import { clearForm } from '../../../../../redux-store/reducers/formStateReducer'
import { useAppDispatch } from '../../../../../redux-store/hooks'

// кнопка, которая обнуляет состояние формы
const ClearButton = () => {
  const dispatch = useAppDispatch()

  const handleClearButton = () => {
    dispatch(clearForm())
  }
  return (

    <Button mode='secondary' size="l" stretched onClick={handleClearButton}>
      Очистить
    </Button>
  )
}

export default ClearButton