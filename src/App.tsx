import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  PanelHeader,
  ConfigProvider,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.css'
import BookingFormPanel from './components/BookingFormPanel';
import { AppearanceType } from '@vkontakte/vk-bridge';
import { useAppSelector } from './redux-store/hooks';

const App = () => {

  const theme = useAppSelector(state => state.appTheme)

  return (
    <ConfigProvider appearance={theme as AppearanceType}>
      <AppRoot>
        <SplitLayout header={<PanelHeader separator={false} />}>
          <SplitCol autoSpaced>
            <View activePanel="main">

              <BookingFormPanel id='main' />

            </View>
          </SplitCol>
        </SplitLayout>
      </AppRoot>
    </ConfigProvider>
  );
};

export default App