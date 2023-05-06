import {
  FormStatus
} from '@vkontakte/vkui';
import { Fragment } from 'react';
import { useAppSelector } from '../../../../redux-store/hooks';

const CustomFormStatus = () => {
  const errorsList = useAppSelector(state => state.formData.errorList)

  return (
    <Fragment>
      {errorsList.length > 0 &&
        <FormStatus header="Некорректные данные" mode="error">
          <ul>
            {errorsList.map((err) => <li key={Math.random()}>{err}</li>)}
          </ul>
        </FormStatus>
      }
    </Fragment>

  )
}

export default CustomFormStatus