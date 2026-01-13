import { useState, useEffect } from "react";
import "../CSS/scrollspynavbar.css"


export const NavbarScroll = () => {
    const [active, setActive] = useState("home");
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "-40% 0px -40% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);


    return (
        <>
            <div className='main-nav-div'>
                <nav>
                    <ul>
                        <li><a href='#home' className={active === 'home' ? "active" : ""}>Home</a></li>
                        <li><a href='#about' className={active === 'about' ? "active" : ""}>About</a></li>
                        <li><a href='#contact' className={active === 'contact' ? "active" : ""}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
};


