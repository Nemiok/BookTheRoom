import { Alert } from '@vkontakte/vkui'
import { setPopoutState } from '../../../../redux-store/reducers/popoutStateReducer';
import { useAppDispatch, useAppSelector } from '../../../../redux-store/hooks';
import validateForm from '../../../../utils/functions/validateForm';
import { clearForm, setFormStatus } from '../../../../redux-store/reducers/formStateReducer';
import { setSnackbarState } from '../../../../redux-store/reducers/snackbarStateReducer';

const CustomPopout = () => {

  const formData = useAppSelector(state => state.formData)
  const dispatch = useAppDispatch()

  const closePopout = () => {
    dispatch(setPopoutState(false));
  };

  // функция обработчик нажатия на кнопку использует функцию валидации формы.
  // в случае ошибок, они отображаются в форме
  // в случае успеха появляется уведомление
  const handleSubmit = () => {
    const errorsArray = validateForm(formData)

    if (errorsArray.length === 0) {
      dispatch(setSnackbarState('success'))
      dispatch(clearForm())
      return
    }
    dispatch(setSnackbarState('error'))
    dispatch(setFormStatus(errorsArray))
    console.log(formData)
  }

  return (
    <Alert
      actions={[
        {
          title: 'Отмена',
          autoClose: true,
          mode: 'cancel',
        },
        {
          title: 'Подтвердить',
          autoClose: true,
          mode: 'destructive',
          action: () => handleSubmit(),
        },
      ]}
      actionsLayout="horizontal"
      onClose={closePopout}
      header="Подтверждение брони"
      text="Вы уверены, что хотите забронировать?"
    />
  )
}

export default CustomPopout