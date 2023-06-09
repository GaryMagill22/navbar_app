import React from 'react';
import { useState } from 'react';


const Navbar = (props) => {
    const [currentName, setCurrentName] = useState("");



    return (
        <>
            <nav style={{ backgroundColor: "purple" }} className="navbar navbar-expand-lg navbar-dark bg-purple">
                <a className="navbar-brand">My Purple Navbar</a>
            </nav>
        </>
    )




};

export default Navbar;