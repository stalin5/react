import { Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
// import Contact from "./pages/Contact.jsx";
import Placement from "./pages/Placement.jsx";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/placement" element={<Placement />} />
            </Routes>
        </>
    );
}

export default App;
