import './_UserArea.scss';
import { useEffect, useState } from 'react';
import { ENDPOINTS } from '../../services/VirtualminService';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getUserData } from '../../services/UserService';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';


function UserArea() {

    const [showContent, setShowContent] = useState("user-data");
    const [links, setLink] = useState([]);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [userID, setUserID] = useState(-1);
    const [userData, setUserData] = useState({});
    const navigate=useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("sessionToken");

        if (token) {
            const decodifiedToken = jwtDecode(token);
            setUserID(parseInt(decodifiedToken.sub));
        }
    }, []);


    useEffect(() => {
        if (userID !== -1) {
            getUserData(userID).then((res) => {
                return res.json()
            }).then((data) => {
                setUserData(data);
            })
        }
    }, [userID])

    //Llamada a servicio para obtener los datos del paquete de hosting contratado.

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

    const closeSession=()=>{
        localStorage.removeItem("sessionToken");
        navigate("/");
    }

    return (
        <>
            <Header />
            <main>
                <section id="tabs">
                    <ul>
                        <li id="user-data-tab" className={showContent === "user-data" ? "active" : ""} onClick={() => openTab("user-data")}>Datos Usuario</li>
                        <li id="hosting-summary-tab" className={showContent === "hosting-summary" ? "active" : ""} onClick={() => openTab("hosting-summary")}>Resumen Servicio</li>
                        <li id="hosting-portal-tab" className={showContent === "hosting-portal" ? "active" : ""} onClick={() => openTab("hosting-portal")}>Portal Hosting</li>
                    </ul>
                </section>
                <section id="tab-content">
                    <article id="user-data" className={showContent === "user-data" ? "active" : ""}>
                        <p>Aquí puede ver y modificar sus datos</p>

                        <div>
                            <form action="#" id="user-data-form">
                                {/* Tal vez tengo que cambiar lo del default value cuando quiera implementar la actuaqlizacion de los datos? */}
                                <div>
                                    <div>
                                        <label htmlFor="nomb">Nombre</label>
                                        <input type="text" id="nomb" name="name" defaultValue={userData.name} />
                                    </div>
                                    <div>
                                        <label htmlFor="ape">Apellidos</label>
                                        <input type="text" id="ape" name="surname" defaultValue={userData.surname} />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="mail">Email</label>
                                    <input type="email" id="mail" name="email" defaultValue={userData.email} />
                                </div>
                                <button type="submit">Actualizar mis datos</button>
                            </form>
                            <form action="#" id="change-pass-form">
                                <div>
                                    <label htmlFor="passAct">Contraseña actual</label>
                                    <input type="password" id="passAct" name="actualPassword" />
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="passNew">Nueva contraseña</label>
                                        <input type="password" id="passNew" name="newPassword" />
                                    </div>
                                    <div>
                                        <label htmlFor="passRep">Repita la contraseña</label>
                                        <input type="password" id="passRep" name="repNewPassword" />
                                    </div>
                                </div>
                                <button type="submit">Cambiar contraseña</button>
                            </form>
                        </div>
                        <button type="button" id="close-session" onClick={closeSession}>Cerrar Sesión</button>
                    </article>
                    <article id="hosting-portal" className={showContent === "hosting-portal" ? "active" : ""}>
                        <p>Para acceder a su panel de control, pulse sobre el botón 'Generar enlace' y se le proporcionará un link de acceso seguro</p>

                        <div id="link-provider">
                            <button type="button" onClick={getLinks}>Generar Enlace <i className="fa-solid fa-arrows-spin"></i></button>
                            {!showErrorMessage ? (links.map((endpoint) => (
                                <span key={endpoint.id_endpoint}><i className="fa-solid fa-dungeon"></i><a href={endpoint.public_url} target='_blank' rel="noreferrer">Ir al Portal</a></span>
                            ))
                            ) : (<p>No se han encontrado enlaces o ha ocurrido un error durante su generación</p>)
                            }
                        </div>

                    </article>

                    <article id="hosting-summary" className={showContent === "hosting-summary" ? "active" : ""}>
                        <p>Aquí puede ver las características de su servicio activo</p>
                        <ul>
                            <li><p>Almacenamiento</p><span>=&gt;</span><span>{ }</span></li>
                            <li><p>Bases de datos</p><span>=&gt;</span><span>{ }</span></li>
                            <li><p>Cuentas de correo</p><span>=&gt;</span><span>{ }</span></li>
                            <li><p>Tipo de hosting</p><span>=&gt;</span><span>{ }</span></li>
                            <li><p>Número de dominios</p><span>=&gt;</span><span>{ }</span></li>
                            <li><p>Ancho de banda</p><span>=&gt;</span><span>{ }</span></li>
                            <li><p>¿Soporte técnico 24h?</p><span>=&gt;</span><span>{ }</span></li>
                            <li><p>¿Migración?</p><span>=&gt;</span><span>{ }</span></li>
                            <li><p>Fecha inicio</p><span>=&gt;</span><span>{ }</span></li>
                            <li><p>Fecha fin</p><span>=&gt;</span><span>{ }</span></li>
                            <li><p>Facturación</p><span>=&gt;</span><span>{ }</span></li>
                        </ul>

                    </article>
                </section>
            </main>
            <Footer />
        </>
    )
}


export default UserArea;

