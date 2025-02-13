import {createRoot} from 'react-dom/client'
import './index.css'
import App from '../src/app/App.tsx';
import {Provider} from 'react-redux';
import {store} from '../src/app/store/store.ts';
import {HashRouter} from 'react-router-dom';


createRoot(document.getElementById('root')!).render(
    <HashRouter basename={import.meta.env.VITE_PUBLIC_URL}>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
)
