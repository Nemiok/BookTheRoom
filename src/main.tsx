import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  AdaptivityProvider,
  ConfigProvider
} from '@vkontakte/vkui';
import { Provider } from 'react-redux';
import store from './redux-store/index.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <ConfigProvider>
    <AdaptivityProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AdaptivityProvider>
  </ConfigProvider>,
)
