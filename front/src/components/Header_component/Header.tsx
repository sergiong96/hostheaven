import HorizontalNavbar from "../HorizontalNavbar_component/HorizontalNavbar";
import './_Header.scss';

function Header() {

    //CAMBIAR, EN DISTINTAS PÁGINAS SE DEBEN MOSTRAR DISTINTAS IMÁGENES
    const imgUrl = require('../../assets/images/clouds.jpeg');

    return (
        <header>
            <HorizontalNavbar />
            <section id="header-content">
                <article></article>
                <article>
                    <img src={imgUrl} alt="Imagen Header"></img>
                </article>
            </section>

        </header>
    )
}

export default Header;