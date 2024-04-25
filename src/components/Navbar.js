import React, {useState} from "react";


function Navbar(){
    const[navLinks, setNavLinks] = useState([
        {
            name: "Home",
            class: "#banner",
        },
        {
            name:"About",
            class:"#about",
        },
        {
            name: "Skills",
            class: "#skills",
        },
        {
            name: "Projects",
            class: "#projects",
        },
        {
            name: "Contact",
            class: "#contact",
        },
    ]);
    return(
    <nav className="navbar">
        <div className="navbar__container">
            <div className="navbar__left-logo">
            </div>
            <div className="navbar__right">
                {navLinks.map((link, index)=>{
                    return(
                        <li key = {index}>
                            <a href={link.class}>{link.name}</a>
                        </li>
                    );
                })}
            </div>
        </div>
    </nav>
    )
};

export default Navbar;
