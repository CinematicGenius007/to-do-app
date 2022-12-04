import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Interface from "./components/Interface";
import Login from "./components/Login";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Story from "./components/Story";


function App() {
    return (
        <div className="min-h-screen w-full bg-dark text-orange-dark">
            <Routes>
                <Route path="/" element={<Home><Main /></Home>} />
                <Route path="/story" element={<Home><Story /></Home>} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/app" element={<Interface />} />
            </Routes>
        </div>
    );
}

export default App;