// Prevent refresh 
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <div>
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