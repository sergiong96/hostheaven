import { useEffect, useState } from 'react';
import './_User.scss';
import { Link } from 'react-router-dom';
import LogInForm from '../../LogInForm/LogInForm';

function User() {

    const [isVisible, setIsVisible] = useState(false);
    const [showLogIn, setShowLogIn] = useState(false);
    const [isLogedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("sessionToken");
        if (token) {
            setIsLoggedIn(true);
        }
    }, [])


    const handleVisibility = () => {
        setIsVisible(!isVisible);
    }


    const showLogInModal = () => {
        setShowLogIn(true);
    }

    const closeLogInModal = () => {
        setShowLogIn(false);
    }

    return (
        <>
            <div id="user-icon" onClick={handleVisibility}>
                <i className="fa-solid fa-user"></i>
                {isVisible && !isLogedIn ? (
                    <div id='logIng-signIn-buttons'>
                        <button type="button" onClick={showLogInModal}>Inicia Sesión</button>
                        <button type="button"><Link to="/register">Regístrate</Link></button>
                    </div>
                ) : isVisible && isLogedIn ? (
                <div id="loged-container">
                    <p>Bienvenido!</p>
                    <button type="button"> <Link to="/userArea">Área de usuario</Link></button>
                </div>
            ) : null}

            </div>
            {showLogIn && <LogInForm onClose={closeLogInModal} />}
        </>
    )

 
}

export default User;