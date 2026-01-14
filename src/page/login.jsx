// import { render } from '@testing-library/react';
import '../CSS/login.css'
// import { ToastContainer } from 'react-toastify';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export const Login = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",

    });

   
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login Payload : ", {
            email: form.email,
            password: form.password
        });

        toast.success("Login Successfull");
        setForm({
            email:"",
            password: ""
        });

        // const passwordRegex = /^(?=.*[!@#$%^&*]).{8,}$/;
        // if (!passwordRegex.test(form.password)) {
        //     toast.error("Inavlid Pass");
        //     return;
        // }

        // showToast("Registration Successful!");

        setTimeout(() => {
            navigate("/"); // home page
        }, 1500);
    };

    return (
        <>
            <ToastContainer position='top-right' autoClose={2000} hideProgressBar={true}
            closeOnClick pauseOnHover theme='dark'
            />
            <div className="login-container">
                <form className="login-card" onSubmit={handleLogin}>
                    <h2>Register Yourself</h2>

                    <div className="form-group">
                        <label>Email: </label>
                        <input type="email" name="email" required onChange={handleChange} value={form.email}/>
                    </div>

                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" name="password" required onChange={handleChange} value={form.password}/>
                    </div>

                    <button className="login-btn">Login</button>

                </form>
            </div>

            <div id="toast"></div>

        </>
    )
};