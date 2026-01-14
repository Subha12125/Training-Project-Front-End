import { Outlet } from "react-router-dom";
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
// import { NavbarScroll } from "../components/scrollspynavbar";


export const DefaultLayout = () => {
    return (
        <>
        <Header/>
        <Navbar/>
        {/* <NavbarScroll/> */}
        <main style={{marginTop:"10vh",minHeight:"calc(100vh - 20vh)"}}><Outlet/></main>
        
        <Footer/>
            
        </>
    )
};

