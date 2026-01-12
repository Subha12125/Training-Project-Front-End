import '../CSS/header.css'
import logo from "../assests/logo.jpeg"

export const Header = () => {
    return (
        <>
            <div className='main-header-div'>
                <img src={logo} alt="logo" className='header-logo' />
                <h3>Haldia Institute of Technology</h3>
            </div>
        </>
    )
};