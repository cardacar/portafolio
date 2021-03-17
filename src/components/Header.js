import React from 'react'
/* Typed es un efecto de escribir lo que hay en el vector string */
import Typed from 'react-typed'
const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Web Development</h1>
                <Typed
                    className="typed-text"
                    strings= {["Javascript", "Java", "Python", "NodeJS", "MySQL"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contactame</a>
            </div>
        </div>
    )
}

export default Header


