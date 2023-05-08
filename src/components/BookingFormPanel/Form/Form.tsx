import {
  Group,
  FormLayout,
  FormItem,
  ButtonGroup,
} from '@vkontakte/vkui';
import CustomSelect from './FormItems/СustomSelect';

import Comment from './FormItems/Comment';
import BookingDatePicker from './FormItems/BookingDatePicker';
import CustomCheckbox from './FormItems/CustomCheckbox';
import ClearButton from './FormItems/ClearButton';
import SubmitButton from './FormItems/SubmitButton';
import CustomFormStatus from './FormItems/CustomFormStatus';
import { useAppSelector } from '../../../redux-store/hooks';
import formStateNames from '../../../utils/nameObjects/formState';
import towers from '../../../utils/dataObjects/towers';
import floors from '../../../utils/dataObjects/floors';
import rooms from '../../../utils/dataObjects/rooms';

// форма для бронирования комнат
const Form = () => {
  const towerSelectValue = useAppSelector(state => state.formData.tower)
  const floorSelectValue = useAppSelector(state => state.formData.floor)
  const roomSelectValue = useAppSelector(state => state.formData.room)

  return (
    <Group>
      <FormLayout>
        <CustomFormStatus />

        <CustomSelect selectedValue={towerSelectValue} selectID={formStateNames.tower} arrayOfValuesToSelectFrom={towers} label='Башня*' />
        <CustomSelect selectedValue={floorSelectValue} selectID={formStateNames.floor} arrayOfValuesToSelectFrom={floors} label='Этаж*' />
        <CustomSelect selectedValue={roomSelectValue} selectID={formStateNames.room} arrayOfValuesToSelectFrom={rooms} label='Переговорная*' />

        <BookingDatePicker />

        <Comment />

        <CustomCheckbox />

        <FormItem>
          <ButtonGroup mode="vertical" gap="m" style={{ width: '100%' }}>
            <SubmitButton />
            <ClearButton />
          </ButtonGroup>
        </FormItem>

      </FormLayout>
    </Group>
  )
}

export default Form