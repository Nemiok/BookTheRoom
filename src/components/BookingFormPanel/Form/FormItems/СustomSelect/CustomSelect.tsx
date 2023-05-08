
import {
  FormItem,
  Select,
} from '@vkontakte/vkui';
import { useAppDispatch } from '../../../../../redux-store/hooks';
import formStateNames from '../../../../../utils/nameObjects/formState';
import { setEndHours, setEndMinutes, setFloor, setRoom, setStartHours, setStartMinutes, setTower } from '../../../../../redux-store/reducers/formStateReducer';

interface ICustomSelectProps {
  label: string,
  arrayOfValuesToSelectFrom: Array<string | number>,
  selectID: string,
  selectedValue: string
}

// переиспользуемый компонент для выпадающего списка с переданными в него данными
const CustomSelect = ({ arrayOfValuesToSelectFrom, label, selectID, selectedValue }: ICustomSelectProps) => {
  const dispatch = useAppDispatch()

  // функция-обработчик выбора значения из выпадающего списка.
  // в зависимости от ID значения, диспатчит соответствующий action
  const handleSelect = (value: string) => {
    switch (selectID) {
      case formStateNames.tower:
        dispatch(setTower(value))
        break
      case formStateNames.floor:
        dispatch(setFloor(value))
        break
      case formStateNames.room:
        dispatch(setRoom(value))
        break
      case formStateNames.startTimeHours:
        dispatch(setStartHours(value))
        break
      case formStateNames.startTimeMinutes:
        dispatch(setStartMinutes(value))
        break
      case formStateNames.endTimeHours:
        dispatch(setEndHours(value))
        break
      case formStateNames.endTimeMinutes:
        dispatch(setEndMinutes(value))
        break
      default: return null
    }
  }

  return (
    <FormItem top={label}>
      <Select
        onChange={(e) => handleSelect(e.target.value)}
        placeholder="Не выбран"
        value={selectedValue}
        options={arrayOfValuesToSelectFrom.map((value) => ({
          label: String(value),
          value: value,
        }))}

      />
    </FormItem>
  )
}

export default CustomSelect