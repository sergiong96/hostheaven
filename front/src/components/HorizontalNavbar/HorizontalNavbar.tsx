import './_HorizontalNavbar.scss';
import User from '../Header/User/User';
import { Link } from 'react-router-dom';

function HorizontalNavbar() {

    
    return (
        <nav id="main-navBar">
            <Link to="/"><i className="fa-solid fa-house"></i></Link>
            <ul className='outer-list'>
                <li><Link to="">Planes de hosting</Link>
                    <ul className='inner-list'>
                        <li>{'->'} <Link to="">Prueba</Link></li>
                        <li>{'->'} <Link to="">Básico</Link></li>
                        <li>{'->'} <Link to="">Premium</Link></li>
                        <li>{'->'} <Link to="">Deluxe</Link></li>
                    </ul>
                </li>
                <li><Link to="">Personaliza tu plan</Link></li>
                <li><Link to="/about">Sobre nosotros</Link></li>
                <li><Link to="/contact">Contáctanos</Link></li>
            </ul>
            <User />
        </nav>
    )
}

export default HorizontalNavbar;