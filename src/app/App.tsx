/*import '../app/App.css'*/
import {LoginForm} from '../../src/features/auth/ui/LoginForm/Login.tsx';
import {Route, Routes} from 'react-router-dom';
import {Chat} from '../features/chat/ui/Chat';

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<LoginForm/>}/>
                <Route path="/chat" element={<Chat/>}/>
            </Routes>
        </>
    )
}

export default App
