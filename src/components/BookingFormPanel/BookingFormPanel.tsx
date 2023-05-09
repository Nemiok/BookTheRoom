import { Icon28CheckCircleOutline, Icon28ErrorCircleOutline } from "@vkontakte/icons"
import { Div, Panel, PanelHeader, Snackbar } from "@vkontakte/vkui"
import ThemeButton from "../ThemeButton"
import Form from "./Form";
import { useAppDispatch, useAppSelector } from "../../redux-store/hooks";
import { setSnackbarState } from "../../redux-store/reducers/snackbarStateReducer";

interface IBookingFormPanelProps {
  id: string,
}

const BookingFormPanel = ({ id }: IBookingFormPanelProps) => {
  const snackbar = useAppSelector(state => state.snackbar)
  const dispatch = useAppDispatch()

  return (
    <Panel id={id}>

      <PanelHeader>
        <Div className='header-wrapper'>
          <Div className='header-wrapper__title'>Бронирование переговорной комнаты</Div>
          <ThemeButton />
        </Div>

      </PanelHeader>
      {snackbar === 'success' ? <Snackbar
        onClose={() => dispatch(setSnackbarState(''))}
        before={<Icon28CheckCircleOutline fill="var(--vkui--color_icon_positive)" />}
      >
        Успешно забронировано
      </Snackbar>
        :
        snackbar === 'error' ? <Snackbar
          onClose={() => dispatch(setSnackbarState(''))}
          before={<Icon28ErrorCircleOutline fill="var(--vkui--color_icon_negative)" />}
        >
          Проверьте заполнение
        </Snackbar> : null}

      <Form />
    </Panel>
  )
}

export default BookingFormPanel