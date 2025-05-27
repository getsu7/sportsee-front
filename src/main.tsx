import {createRoot} from 'react-dom/client'
import './sass/index.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import User from "./pages/User/User.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/:id" element={<User/>}/>
            <Route path="/" element={<User/>}/>
        </Routes>
        <Sidebar/>
    </BrowserRouter>
)
