// Prevent refresh 
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../CSS/navbar.css'

export const Navbar = () => {

    const navigate = useNavigate();
    localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };
    return (
        <>
            <div className='main-nav-div'>
                <nav>
                    <ul>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        {/* <li><NavLink to="/registration">Registration</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li> */}
                        <li>
                            <button className="logout-btn" onClick={handleLogout}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
};
