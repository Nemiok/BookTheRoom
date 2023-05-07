import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  AdaptivityProvider,
} from '@vkontakte/vkui';
import { Provider } from 'react-redux';
import store from './redux-store/index.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <AdaptivityProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AdaptivityProvider>
)
