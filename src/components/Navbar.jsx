import React from 'react'
import './navbar.css'
import Result from './Result'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <h1>Amarpal</h1>
                </div>
                <div className="menu">
                    <a href="#">Home</a>
                    <a href="#">Service</a>
                    <a href="#">Gallery</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </nav>
            <Result/>
        </>
    )
}

export default Navbar
