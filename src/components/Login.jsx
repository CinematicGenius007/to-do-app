import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    };

    return (
        <div className="flex justify-center items-center min-h-screen w-full p-8">
            <form onSubmit={formSubmit} className="flex flex-col items-start gap-8 py-6 px-8 bg-gray-dark-600 text-teal-dark">
                <h1 className="text-4xl font-black">Login</h1>
                <div>
                    <input value={formState.email} onChange={handleChange} name="email" type="email" placeholder="Email*" autoComplete="false" required className="block py-1 px-3 bg-transparent rounded-lg outline-none border border-gray-light-100 focus:border-green-dark text-lg" />
                </div>
                <div>
                    <input value={formState.password} onChange={handleChange} name="password" type="password" placeholder="Password*" autoComplete="false" required className="block py-1 px-3 bg-transparent rounded-lg outline-none border border-gray-light-100 focus:border-green-dark text-lg" />
                </div>
                <div className="flex gap-8 py-4">
                    <button className="py-2 px-4 rounded-lg bg-teal-dark text-xl text-dark">login</button>
                </div>
                <Link to="/signup" className="text-green-dark">Not a user already?</Link>
            </form>
        </div>
    );
};

export default Login;