// Prevent refresh 
import { NavLink } from "react-router-dom";
import '../CSS/navbar.css'

export const Navbar = () => {
    return (
        <>
            <div className='main-nav-div'>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    )
};
