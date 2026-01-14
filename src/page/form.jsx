import '../CSS/form.css'
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";


export const FormContact = () => {

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login Payload : ", {
            name: form.name,
            phone: form.phone,
            email: form.email,
            message: form.message,
        });

        toast.success("Successfully Send");
        setForm({
            name: "",
            phone: "",
            email: "",
            message: "",
        });
    };


    return (
        <>  <ToastContainer position='top-right' autoClose={2000} hideProgressBar={true}
            closeOnClick pauseOnHover theme='dark'
        />
            <div className="container">
                <h2>Contact With Me</h2>

                <form className="contact-form" onSubmit={handleLogin}>

                    <div className="name">
                        <label>Name: </label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required />
                    </div>

                    <div className="phone">
                        <label>Phone: </label>
                        <input type="number" name="phone" value={form.phone} onChange={handleChange} required />
                    </div>

                    <div className="email">
                        <label>Email: </label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required />
                    </div>

                    <div className="message">
                        <label>Message: </label>
                        <textarea name="message" value={form.message} onChange={handleChange} required></textarea>
                    </div>

                    <button type="submit" className="submit-btn">Send</button>
                </form>

            </div>
        </>
    )
};