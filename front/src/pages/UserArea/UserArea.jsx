import './_UserArea.scss';
import { useEffect, useState } from 'react';
import { ENDPOINTS } from '../../services/VirtualminService';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getUserData, updateData, changePassword } from '../../services/UserService';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import DeleteUserForm from './DeleteUserForm/DeleteUserForm';
import ServerResponse from '../../components/ServerResponse/ServerResponse';


function UserArea() {

    const [showContent, setShowContent] = useState("user-data");
    const [links, setLink] = useState([]);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [userID, setUserID] = useState(-1);
    const [userData, setUserData] = useState({});
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [newPassword, setNewPassword] = useState({
        id_user: -1,
        actual_pass: "",
        new_pass: "",
        new_pass_rep: ""
    });
    const [responseData, setResponseData] = useState({
        status: 0,
        response: ""
    });

    const navigate = useNavigate();

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
            });
        }

        setNewPassword({
            ...newPassword,
            id_user: userID
        });

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

    const closeSession = () => { //SACAR DE AQUÍ Y PONER EL BOTÓN QUE HAGA ESTO EN EL USER DEL NAVBAR
        localStorage.removeItem("sessionToken");
        navigate("/");
    }

    const handleChangeUserData = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        }

        )
    }

    const showDeleteForm = () => {
        setShowDeleteModal(true);
    }

    const closeDeleteModal = () => {
        setShowDeleteModal(false);
    }

    const handleSubmitUserData = (event) => {
        event.preventDefault();
        let resStatus = 0;

        setResponseData({
            status: parseInt(resStatus),
            response: ""
        });

        updateData(userData).then((res) => {
            resStatus = res.status;
            return res.json();
        }).then((data) => {
            setResponseData({
                status: parseInt(resStatus),
                response: data.response
            });
        }).catch((error) => {
            setResponseData({
                status: parseInt(resStatus),
                response: error
            });
        })

    }

    const handleChangePassword = (event) => {
        const { name, value } = event.target;
        setNewPassword({
            ...newPassword,
            [name]: value
        })
    }

    const handleSubmitPassword = (event) => {

        event.preventDefault();
        if (newPassword.new_pass !== newPassword.new_pass_rep) {
            alert("La contraseña repetida no coincide con la nueva contraseña");
        } else {
            let resStatus = 0;

            setResponseData({
                status: parseInt(resStatus),
                response: ""
            });
            changePassword(newPassword).then((res) => {
                resStatus = res.status;
                return res.json();
            }).then((data) => {
                setResponseData({
                    status: parseInt(resStatus),
                    response: data.response
                });
            })
        }
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
                            <form action="#" id="user-data-form" onSubmit={handleSubmitUserData}>
                                <div>
                                    <div>
                                        <label htmlFor="nomb">Nombre</label>
                                        <input type="text" id="nomb" name="name" defaultValue={userData.name} onChange={handleChangeUserData} />
                                    </div>
                                    <div>
                                        <label htmlFor="ape">Apellidos</label>
                                        <input type="text" id="ape" name="surname" defaultValue={userData.surname} onChange={handleChangeUserData} />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="mail">Email</label>
                                    <input type="email" id="mail" name="email" defaultValue={userData.email} onChange={handleChangeUserData} />
                                </div>
                                <button type="submit">Actualizar mis datos</button>
                            </form>
                            <form action="#" id="change-pass-form" onSubmit={handleSubmitPassword}>
                                <div>
                                    <label htmlFor="passAct">Contraseña actual</label>
                                    <input type="password" id="passAct" name="actual_pass" onChange={handleChangePassword} />
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="passNew">Nueva contraseña</label>
                                        <input type="password" id="passNew" name="new_pass" onChange={handleChangePassword} />
                                    </div>
                                    <div>
                                        <label htmlFor="passRep">Repita la contraseña</label>
                                        <input type="password" id="passRep" name="new_pass_rep" onChange={handleChangePassword} />
                                    </div>
                                </div>
                                <button type="submit">Cambiar contraseña</button>
                            </form>
                        </div>
                        <button type="button" id="delete-user" onClick={showDeleteForm}>Quiero eliminar mi cuenta</button>
                        {showDeleteModal && <DeleteUserForm user_id={userID} onClose={closeDeleteModal} />}
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
            {responseData.status !== 0 && <ServerResponse responseStatus={responseData.status} response={responseData.response} />}
            <Footer />
        </>
    )
}


export default UserArea;

