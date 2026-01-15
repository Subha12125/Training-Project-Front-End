// import { render } from '@testing-library/react';
import '../CSS/login.css'
// import { ToastContainer } from 'react-toastify';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FaLock } from "react-icons/fa";
import axios from "axios";

export const Login = () => {
    const navigate = useNavigate();
    const API_URL = process.env.REACT_APP_API_URL;
    const [form, setForm] = useState({
        email: "",
        password: "",

    });


    const handleChange =  (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const payload = {
      email: form.email,
      password: form.password,
    };

    console.log("Sending to backend from Login page", payload);

    await axios.post(`${API_URL}/login`, payload);

    toast.success("Login successful!");

    setTimeout(() => {
      navigate("/");
    }, 1500);

    setForm({ email: "", password: "" });

  } catch (error) {
    console.log("Full error:", error);

    if (error.response) {
      toast.error(error.response.data.msg || "Invalid credentials");
    } else {
      toast.error("Server not responding");
    }
  }
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
                        <input type="email" name="email" required onChange={handleChange} value={form.email} />
                    </div>

                    <div className="form-group">
                        <label><FaLock className='input-icon' />Password: </label>
                        <input type="password" name="password" required onChange={handleChange} value={form.password} />
                    </div>

                    <button className="login-btn">Login</button>

                </form>
            </div>

            <div id="toast"></div>

        </>
    )
};