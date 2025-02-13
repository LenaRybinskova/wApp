import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from '../src/app/App.tsx';
import {Provider} from 'react-redux';
import {store} from '../src/app/store/store.ts';
import {HashRouter} from 'react-router-dom';


createRoot(document.getElementById('root')!).render(
    <HashRouter>
        <StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </StrictMode>,
    </HashRouter>
)


// <HashRouter basename={process.env.PUBLIC_URL}>