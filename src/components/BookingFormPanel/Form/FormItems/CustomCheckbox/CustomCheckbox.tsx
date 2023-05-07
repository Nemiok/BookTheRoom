import {
  Checkbox, Link

} from '@vkontakte/vkui';
import { setAgree } from '../../../../../redux-store/reducers/formStateReducer';
import { useAppDispatch, useAppSelector } from '../../../../../redux-store/hooks';

// чекбокс для согласия с условиями бронирования переговорной комнаты
const CustomCheckbox = () => {

  const dispatch = useAppDispatch()
  const isAgree = useAppSelector(state => state.formData.isAgree)

  const handleCheck = () => {
    dispatch(setAgree(!isAgree))
  }

  return (

    <Checkbox checked={isAgree} onChange={handleCheck}>
      Я согласен(на) с <Link>условиями бронирования</Link>
    </Checkbox>
  )
}

export default CustomCheckbox