import './_UserArea.scss';
import { useEffect, useState } from 'react';
import { ENDPOINTS } from '../../services/VirtualminService';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getUserData } from '../../services/UserService';


function UserArea() {

    const [showContent, setShowContent] = useState("user-data");
    const [links, setLink] = useState([]);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [userData, setUserData] = useState({});


    // Llamada al servicio para obtener los datos segun el id del usuario logeado 
    //(Cuando desarrolle el sistema de sesion (JWT en el servidor y guardarlo en el localStorage del cliente) añadire funcionalidad aqui y esto cambiara) 
    useEffect(() => {
        getUserData(1).then((res) => { //ESTE DATO DEBE CAMBIAR, CUANDO IMPLEMENTE EL INCICIO DE SESIÓN SALDRÁ DEL TOKEN DE SESION DONDE SE GUARDARÁ EL ID DE USUARIO
            return res.json()
        }).then((data) => {
            setUserData(data);
        })
    }, []);


    const openTab = (tab) => {
        setShowContent(tab);
    }


    const getLinks = () => {
        if (ENDPOINTS.length > 0 && links.length <= 0) {
            const parsedLinks = ENDPOINTS.map(endpoint => JSON.parse(endpoint));
            setLink(parsedLinks);
            setShowErrorMessage(false);
        } else if (ENDPOINTS.length <= 0) {
            setShowErrorMessage(true);
        }
    }


    return (
        <>
            <Header />
            <main>
                <section id="tabs">
                    <ul>
                        <li id="user-data-tab" className={showContent === "user-data" ? "active" : ""} onClick={() => openTab("user-data")}>Datos Usuario</li>
                        <li id="hosting-portal-tab" className={showContent === "hosting-portal" ? "active" : ""} onClick={() => openTab("hosting-portal")}>Portal Hosting</li>
                    </ul>
                </section>
                <section id="tab-content">
                    <article id="user-data" className={showContent === "user-data" ? "active" : ""}>
                        <form action="#" id="user-data-form">
        {/* Tal vez tengo que cambiar lo del default value cuando quiera implementar la actuaqlizacion de los datos? */}
                            <div>
                                <label htmlFor="nomb">Nombre</label>
                                <input type="text" id="nomb" name="name" defaultValue={userData.name} />
                                <label htmlFor="ape">Apellidos</label>
                                <input type="text" id="ape" name="surname" defaultValue={userData.surname} />
                            </div>

                            <div>
                                <label htmlFor="mail">Email</label>
                                <input type="email" id="mail" name="email" defaultValue={userData.email} />
                                <label htmlFor="pass">Contraseña</label>
                                <input type="password" id="pass" name="password" defaultValue="ejemplo" />
                            </div>

                            <button type="submit">Actualizar mis datos</button>
                        </form>
                    </article>
                    <article id="hosting-portal" className={showContent === "hosting-portal" ? "active" : ""}>
                        <p>Para acceder a su panel de control, pulse sobre el botón 'Generar enlace' y se le proporcionará un link de acceso seguro</p>

                        <div id="link-provider">
                            <button type="button" onClick={getLinks}>Generar Enlace</button>
                            {!showErrorMessage ? (links.map((endpoint) => (
                                <span key={endpoint.id_endpoint}><a href={endpoint.public_url} target='_blank' rel="noreferrer">Ir al Portal</a></span>
                            ))
                            ) : (<p>No se han encontrado enlaces o ha ocurrido un error durante su generación</p>)
                            }
                        </div>

                    </article>
                </section>
            </main>
            <Footer />
        </>
    )
}


export default UserArea;


