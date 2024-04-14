import { useEffect, useState } from 'react';
import './_User.scss';
import { Link } from 'react-router-dom';
import LogInForm from '../../LogInForm/LogInForm';

function User() {

    const [isVisible, setIsVisible] = useState(false);
    const [showLogIn, setShowLogIn] = useState(false);
    const [isLogedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        setShowLogIn(false);
    }, [])


    const handleVisibility = () => {
        setIsVisible(!isVisible);
    }

    const handleModal = () => {
        setShowLogIn(!showLogIn);
    }

    return (
        <>
            <div id="user-icon" onClick={handleVisibility}>
                <i className="fa-solid fa-user"></i>
                {isVisible && <div id='logIng-signIn-buttons'>
                    <button type="button" onClick={handleModal}>Inicia Sesión</button>
                    <button type="button"><Link to="/register">Regístrate</Link></button>
                </div>}
            </div>

            {showLogIn && <LogInForm visible={showLogIn} />}
        </>
    )
}

export default User;