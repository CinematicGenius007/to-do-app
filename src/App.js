import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";


function App() {
    return (
        <div className="min-h-screen w-full bg-dark text-orange-dark">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/app" element={<div></div>} />
            </Routes>
        </div>
    );
}

export default App;