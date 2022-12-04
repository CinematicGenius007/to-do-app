import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [formState, setFormState] = useState({
        email: "",
        password: "",
        name: ""
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
            <form onSubmit={formSubmit} className="flex flex-col items-start gap-8 py-6 px-8 bg-gray-dark-600 text-green-dark">
                <h1 className="text-4xl font-black">Sign Up</h1>
                <div className="pt-4">
                    <input value={formState.name} onChange={handleChange} name="name" type="text" placeholder="Name*" autoComplete="off" required className="block py-1 px-3 bg-transparent rounded-lg outline-none border border-gray-light-100 focus:border-green-dark text-lg" />
                </div>
                <div>
                    <input value={formState.email} onChange={handleChange} name="email" type="email" placeholder="Email*" autoComplete="off" required className="block py-1 px-3 bg-transparent rounded-lg outline-none border border-gray-light-100 focus:border-green-dark text-lg" />
                </div>
                <div>
                    {/* <label className="block text-2xl">Name</label> */}
                    <input value={formState.password} onChange={handleChange} name="password" type="password" placeholder="Password*" autoComplete="off" required className="block py-1 px-3 bg-transparent rounded-lg outline-none border border-gray-light-100 focus:border-green-dark text-lg" />
                </div>
                <div className="flex gap-8 py-4">
                    <button className="py-2 px-4 rounded-lg bg-green-dark text-xl text-dark">signup</button>
                </div>
                <Link to="/login" className="text-teal-dark">Already a user?</Link>
            </form>
        </div>
    );
};

export default Signup;