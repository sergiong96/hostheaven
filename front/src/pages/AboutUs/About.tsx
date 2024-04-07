import './_About.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function AboutUs() {

    const imgUrl = require('../../assets/images/aboutCompany.jpg');
    const team1 = require('../../assets/images/romb1.png');
    const team2 = require('../../assets/images/romb2.png');
    const team3 = require('../../assets/images/romb3.png');
    const team4 = require('../../assets/images/romb4.png');
    const team5 = require('../../assets/images/romb5.png');
    const team6 = require('../../assets/images/romb6.png');
    const team7 = require('../../assets/images/romb7.png');
    const team8 = require('../../assets/images/romb8.png');
    const team9 = require('../../assets/images/romb9.png');


    return (
        <>
            <Header />
            <main id="aboutUs-page">
                <section id="about-company-container">
                    <article>
                        <p>En HostHeaven, creemos en la transparencia, la confianza y la integridad en todo lo que hacemos. Valoramos a cada cliente y nos comprometemos a superar tus expectativas en términos de calidad, fiabilidad y soporte.
                            Únete a nosotros hoy y descubre por qué somos la opción preferida para el alojamiento web confiable y de alta calidad. Estamos aquí para ayudarte a hacer realidad tus sueños en línea.</p>
                    </article>

                    <article>
                        <img src={imgUrl} alt="Imagen compañía" />
                    </article>
                </section>
                <section id="about-team-container">
                    <article id="rombhus-container">
                        <div>
                            <span><img src={team1} alt="Team 1" /></span>
                            <span><img src={team2} alt="Team 2" /></span>
                            <span><img src={team3} alt="Team 3" /></span>
                        </div>
                        <div>
                            <span><img src={team4} alt="Team 4" /></span>
                            <span><img src={team5} alt="Team 5" /></span>
                            <span><img src={team6} alt="Team 6" /></span>
                        </div>
                        <div>
                            <span><img src={team7} alt="Team 7" /></span>
                            <span><img src={team8} alt="Team 8" /></span>
                            <span><img src={team9} alt="Team 9" /></span>
                        </div >
                    </article >

                    <article>
                        <p>Nos enorgullecemos de ofrecer una infraestructura de alojamiento de vanguardia respaldada por un equipo de profesionales expertos en tecnología. Nuestro compromiso con la excelencia nos impulsa a proporcionar un servicio confiable y de alto rendimiento, garantizando que tu sitio web esté siempre disponible para tus visitantes.
                            Nos esforzamos por brindar una experiencia de usuario excepcional, desde la configuración inicial hasta la atención al cliente continua. Nuestro equipo está aquí para ayudarte en cada paso del camino, ya sea que necesites asistencia técnica, consejos sobre optimización del rendimiento o simplemente tengas preguntas sobre nuestros servicios.</p>
                    </article>
                </section >



            </main >
            <Footer />
        </>
    );
};

export default AboutUs;