import '../CSS/registration.css'

import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Registration = () => {
    const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const showToast = (msg) => {
    const toast = document.getElementById("toast");
    toast.innerText = msg;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");   
    }, 3000);
  };
      
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;
    const passwordRegex = /^(?=.*[!@#$%^&*]).{8,}$/;

    if (!phoneRegex.test(form.phone)) {
      showToast("Phone number must be exactly 10 digits");
      return;
    }

    if (!passwordRegex.test(form.password)) {
      showToast("Password must be 8 characters & contain 1 special character");
      return;
    }

    if (form.password !== form.confirmPassword) {
      showToast("Password and Confirm Password do not match");
      return;
    }
    
    showToast("Registration Successful!");

    setTimeout(() => {
      navigate("/"); 
    }, 1500);
  };

    return (
        <>
        
        <div className="register-container">
            <form className="register-card" onSubmit={handleRegister}>
                <h2>Register Yourself</h2>
                <div className="form-group">
                    <label>Username: </label>
                    <input type="text" name="username" required onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label>Email: </label>
                    <input type="email" name="email" required onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label>Phone: </label>
                    <input type="number" name="phone" required onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password: </label>
                    <input type="password" name="password" required onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label>Confirm Password: </label>
                    <input type="password" name="confirmPassword" required onChange={handleChange}/>
                </div>

                <button className="register-btn">Register</button>

            </form>
        </div>

        <div id="toast"></div>

        </>
    )
};