
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  AppearanceProvider,
  Div,
} from '@vkontakte/vkui';
import { Icon28Clock } from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';
import Form from './components/Form';
import useTheme from './hooks/useTheme';
import { AppearanceType } from '@vkontakte/vk-bridge';
import ThemeButton from './components/ThemeButton';

const App = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  };

  return (
    <AppearanceProvider appearance={theme as AppearanceType}>
      <AppRoot>
        <SplitLayout header={<PanelHeader separator={false} />}>
          <SplitCol autoSpaced>
            <View activePanel="main">

              <Panel id="main">

                <PanelHeader before={<Icon28Clock />}>
                  <Div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Div>Бронирование переговорной комнаты</Div>
                    <ThemeButton currentTheme={theme} toggleTheme={toggleTheme} />
                  </Div>
                </PanelHeader>

                <Form />
              </Panel>

            </View>
          </SplitCol>
        </SplitLayout>
      </AppRoot>
    </AppearanceProvider>
  );
};

export default App