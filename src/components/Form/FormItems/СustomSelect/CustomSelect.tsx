
import {
  FormItem,
  Select,
} from '@vkontakte/vkui';
import { useAppDispatch } from '../../../../redux-store/hooks';
import formStateNames from '../../../../utils/nameObjects/formState';
import { setFloor, setRoom, setTower } from '../../../../redux-store/reducers/formStateReducer';

interface ICustomSelectProps {
  labelTop: string,
  arrayOfValuesToSelectFrom: Array<string | number>,
  selectID: string,
  selectedValue: string
}


// переиспользуемый компонент для выпадающего списка с переданными в него данными
const CustomSelect = ({ arrayOfValuesToSelectFrom, labelTop, selectID, selectedValue }: ICustomSelectProps) => {
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
      default: return null
    }
  }

  return (
    <FormItem top={labelTop}>
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