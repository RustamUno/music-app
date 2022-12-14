import {useState} from "react";

import '../../../App.css';
import logo from '../../../img/logo.png';

function Navigation(){
    const [visible, setVisible] = useState(false);
    const toggleVisibility = setVisible(!visible);
    return(
    <nav className="main__nav nav">
        <div className="nav__logo logo">
            <img className="logo__image" src={logo} alt="logo"/>
        </div>
        <div className="nav__burger burger" onClick={toggleVisibility}>
            <span className="burger__line"/>
            <span className="burger__line"/>
            <span className="burger__line"/>
            {visible}
        </div>

        {visible && (
        <div className="nav__menu menu">
            <ul className="menu__list">
                <li className="menu__item"><a href="/" className="menu__link">Главное</a></li>
                <li className="menu__item"><a href="/" className="menu__link">Мой плейлист</a></li>
                <li className="menu__item"><a href="/" className="menu__link">Войти</a></li>
            </ul>
        </div>
        )}
    </nav>
    )
}

export default Navigation;