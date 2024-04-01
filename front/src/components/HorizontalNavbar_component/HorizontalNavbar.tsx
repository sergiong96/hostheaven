import './_HorizontalNavbar.scss';
import User from '../Header_component/User_component/User';
import { useState } from 'react';


function HorizontalNavbar() {

    const [isVisible, setVisibility] = useState(false);

    const toggleVisibility = () => {
        setVisibility(!isVisible);
    }


    return (
        <nav id="main-navBar">
            <ul>
                <li onClick={toggleVisibility}>Planes de hosting
                    {isVisible && <ul>
                        <li>Prueba</li>
                        <li>Básico</li>
                        <li>Premium</li>
                        <li>Deluxe</li>
                    </ul>}
                </li>
                <li>Personaliza tu plan</li>
                <li>Sobre nosotros</li>
                <li>Contáctanos</li>
            </ul>
            <User />
        </nav>
    )
}

export default HorizontalNavbar;