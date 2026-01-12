import { Outlet } from "react-router-dom";
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { Header } from '../components/header';


export const DefaultLayout = () => {
    return (
        <>
        <Header/>
        <Navbar/>
        <main style={{marginTop:"10vh"}}><Outlet/></main>
        
        <Footer/>
            
        </>
    )
};

