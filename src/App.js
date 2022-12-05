import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Interface from "./components/Interface";
import Login from "./components/Login";
import Main from "./components/Main";
import { NotFound } from "./components/NotFound";
import Signup from "./components/Signup";
import Story from "./components/Story";


function App() {
    return (
        <>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/story" element={<Story />} />
                </Route>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/app" element={<Interface />} />
            </Routes>
        </>
    );
}

export default App;