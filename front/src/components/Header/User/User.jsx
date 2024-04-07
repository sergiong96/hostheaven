import { useState } from 'react';
import './_User.scss';
import { Link } from 'react-router-dom';

function User() {

    const [isVisible, setIsVisible] = useState(false);
    const [isLogedIn, setIsLoggedIn] = useState(false);

    const handleVisibility = () => {
        setIsVisible(!isVisible);
    }



    return (
        <div id="user-icon" onClick={handleVisibility}>
            <i className="fa-solid fa-user"></i>
            {isVisible && <div id='logIng-signIn-buttons'>
                <button type="button">Inicia Sesión</button>
                <button type="button"><Link to="/register">Regístrate</Link></button>
            </div>}

        </div>
    )
}

export default User;