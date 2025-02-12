import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from '../src/app/App.tsx';
import {Provider} from 'react-redux';
import {store} from '../src/app/store/store.ts';
import {BrowserRouter} from 'react-router-dom';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
            <App/>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
)
