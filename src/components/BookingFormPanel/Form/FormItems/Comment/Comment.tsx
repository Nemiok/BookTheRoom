import {
  FormItem,
  Textarea,

} from '@vkontakte/vkui';
import { useAppDispatch, useAppSelector } from '../../../../../redux-store/hooks';
import { setComment } from '../../../../../redux-store/reducers/formStateReducer';

// текстовое поле, в которое пользователь может писать свой комментарий
const Comment = () => {
  const comment = useAppSelector(state => state.formData.comment)

  const dispatch = useAppDispatch()

  const handleTypeComments = (value: string) => {
    dispatch(setComment(value))
  }

  return (

    <FormItem top="Комментарий">
      <Textarea value={comment} onChange={(e) => handleTypeComments(e.target.value)} />
    </FormItem>
  )
}

export default Comment