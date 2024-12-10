import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main_page from "./MainPage/main_page";
import Mines from "./MinesPage/Mines"
import MinesSpibe from "./MinesSpibePage/MinesSpibe"

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main_page />} />
                <Route path="/mines" element={<Mines />} />
                <Route path="/mines_spibe" element={<MinesSpibe />} />
            </Routes>
        </Router>
    );
}