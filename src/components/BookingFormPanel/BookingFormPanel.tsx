import { Icon28CheckCircleOutline, Icon28Clock } from "@vkontakte/icons"
import { Div, Panel, PanelHeader, Snackbar } from "@vkontakte/vkui"
import ThemeButton from "../ThemeButton"
import { useState } from 'react';
import Form from "./Form";


interface IBookingFormPanelProps {
  id: string,
}

const BookingFormPanel = ({ id }: IBookingFormPanelProps) => {

  const [snackbar, setSnackbar] = useState<React.ReactElement | null>(null);

  const openSuccessSnackbar = () => {
    if (snackbar) return;
    setSnackbar(
      <Snackbar
        onClose={() => setSnackbar(null)}
        before={<Icon28CheckCircleOutline fill="var(--vkui--color_icon_positive)" />}
      >
        Успешно забронировано
      </Snackbar>,
    );
  };

  return (
    <Panel id={id}>

      <PanelHeader before={<Icon28Clock />}>
        <Div className='header-wrapper'>
          <Div className='header-wrapper__title'>Бронирование переговорной комнаты</Div>
          <ThemeButton />
        </Div>
      </PanelHeader>

      <Form openSuccessSnackbar={openSuccessSnackbar} />
      {snackbar}
    </Panel>
  )
}

export default BookingFormPanel