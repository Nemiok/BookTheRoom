import {
  Group,
  FormLayout,
  FormItem,
  ButtonGroup,
} from '@vkontakte/vkui';
import CustomSelect from './FormItems/СustomSelect';
import towers from '../../utils/dataObjects/towers';
import floors from '../../utils/dataObjects/floors';
import rooms from '../../utils/dataObjects/rooms';
import Comment from './FormItems/Comment';
import BookingDatePicker from './FormItems/BookingDatePicker';
import formStateNames from '../../utils/nameObjects/formState';
import CustomCheckbox from './FormItems/CustomCheckbox';
import { useAppSelector } from '../../redux-store/hooks';
import ClearButton from './FormItems/ClearButton';
import SubmitButton from './FormItems/SubmitButton';
import CustomFormStatus from './FormItems/CustomFormStatus';

// форма для бронирования комнат
const Form = () => {
  const towerSelectValue = useAppSelector(state => state.formData.tower)
  const floorSelectValue = useAppSelector(state => state.formData.floor)
  const roomSelectValue = useAppSelector(state => state.formData.room)


  return (
    <Group>
      <FormLayout>
        <CustomFormStatus />

        <CustomSelect selectedValue={towerSelectValue} selectID={formStateNames.tower} arrayOfValuesToSelectFrom={towers} labelTop='Башня*' />
        <CustomSelect selectedValue={floorSelectValue} selectID={formStateNames.floor} arrayOfValuesToSelectFrom={floors} labelTop='Этаж*' />
        <CustomSelect selectedValue={roomSelectValue} selectID={formStateNames.room} arrayOfValuesToSelectFrom={rooms} labelTop='Переговорная*' />

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