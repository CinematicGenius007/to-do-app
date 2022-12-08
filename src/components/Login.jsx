import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        userEmail: "",
        userPassword: "",
    });

    const [popup, setPopup] = useState({
        state: false,
        message: null,
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/users/login', formState)
            .then((res) => {
                if (res.data.token) {
                    document.cookie = `token=${res.data.token};SameSite=Strict;Secure`;
                    setFormState({
                        userEmail: "",
                        userPassword: "",
                    });
                    navigate("/app");
                } else {
                    setPopup({
                        state: true,
                        message: res.data.message
                    });
                }
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    setPopup({
                        state: true,
                        message: "Invalid credentials"
                    });
                } else {
                    setPopup({
                        state: true,
                        message: "Something went wrong"
                    });
                }
            });
    };

    useEffect(() => {
        let timeout = null;
        if (popup.state === true) {
            timeout = setTimeout(() => {
                setPopup({
                    state: false,
                    message: null
                });
            }, 3000);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [popup.state]);

    return (
        <div className="flex justify-center items-center p-8 min-h-screen w-full bg-dark">
            <form onSubmit={formSubmit} autoComplete="off" className="flex flex-col items-start gap-8 py-6 px-8 bg-gray-dark-600 text-teal-dark">
                <Link to="/" className="text-orange-dark"><i className="fal fa-long-arrow-left"></i> <span className="hover:underline underline-offset-4">Go back</span></Link>
                <h1 className="text-4xl font-black">Login</h1>
                <div>
                    <input value={formState.userEmail} onChange={handleChange} name="userEmail" type="email" placeholder="Email*" autoComplete="new-password" required className="block py-1 px-3 w-96 bg-transparent rounded-lg outline-none border border-gray-light-100 focus:border-green-dark text-lg" />
                </div>
                <div>
                    <input value={formState.userPassword} onChange={handleChange} name="userPassword" type="password" placeholder="Password*" autoComplete="new-password" required className="block py-1 px-3 w-96 bg-transparent rounded-lg outline-none border border-gray-light-100 focus:border-green-dark text-lg" />
                </div>
                {!popup.state ? null : <p className="max-w-xs text-red-dark">*{popup.message}*</p>}
                <div className="flex gap-8 py-4">
                    <button className="py-2 px-4 rounded-lg bg-teal-dark text-xl text-dark">login</button>
                </div>
                <Link to="/signup" className="text-green-dark">Not a user already?</Link>
            </form>
        </div>
    );
};

export default Login;