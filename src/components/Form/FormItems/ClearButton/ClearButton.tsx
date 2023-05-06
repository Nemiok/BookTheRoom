import { useAppDispatch } from '../../../../redux-store/hooks'
import { clearForm } from '../../../../redux-store/reducers/formStateReducer'
import { Button } from '@vkontakte/vkui'

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