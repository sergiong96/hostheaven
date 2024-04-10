import { useEffect } from 'react';
import './_Custom.scss';

function Custom() {


    useEffect(() => {
        let hash = window.location.hash;
        if (hash) {
            const fragment = document.querySelector(hash);
            fragment.scrollIntoView();
        }
    }, []);


    return (
        <section id="custom-creator-container">
            <h2>¿Nuestros paquetes preconfigurados no te convencen?</h2>
            <h3>No hay problema, crea el tuyo propio</h3>
            <article>
                <form action="#" id="custom-creator-form">

                    <div>
                        <div>
                            <label htmlFor="name">Nombre del paquete</label>
                            <input type="text" id="name" name="package_name" />
                        </div>
                        <div>
                            <label htmlFor="type">Tipo de Hosting</label>
                            <select name="type" id="type">
                                <option value="COMPARTIDO">Compartido</option>
                                <option value="VPS">VPS</option>
                                <option value="DEDICADO">Dedicado</option>
                                <option value="CLOUD">Cloud</option>
                                <option value="WORDPRESS">WordPress</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="cap">Capacidad de almacenamiento</label>
                            <input type="number" id="cap" name="storage" />
                        </div>
                        <div>
                            <label htmlFor="banda">Ancho de banda mensual</label>
                            <input type="number" id="banda" name="monthly_bandwidth" />
                        </div>
                        <div>
                            <label htmlFor="doms">Número de dominios</label>
                            <input type="number" id="doms" name="domains" />
                        </div>
                    </div>
                    <div>

                        <div>
                            <label htmlFor="webs">Sitios web</label>{/*¿Tiene sentido distinguir entre dominios y sititos web?*/}
                            <input type="number" id="webs" name="number_of_websites" />
                        </div>

                        <div>
                            <label htmlFor="databases">Bases de datos</label>
                            <input type="number" id="databases" name="databases" />
                        </div>


                        <div>
                            <label htmlFor="emails">Cuentas de correo</label>
                            <input type="number" id="emails" name="email_account" />
                        </div>

                    </div>

                    <div className="booleans">

                        <div>
                            <label htmlFor="support">¿Soporte técnico 24 horas?</label>
                            <select name="technical_support_24h" id="support">
                                <option value="yes">Sí</option>
                                <option value="no">No</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="install">¿Instalador de aplicaciones?</label>
                            <select name="app_installation" id="install">
                                <option value="yes">Sí</option>
                                <option value="no">No</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="mig">¿Migración de datos?</label>
                            <select name="migration" id="mig">
                                <option value="yes">Sí</option>
                                <option value="no">No</option>
                            </select>
                        </div>

                    </div>

                    <input type="hidden" name="purchase_quantity" value="1" />
                    <input type="hidden" name="custom" value="true" />
                    <input type="hidden" name="ssl" value="true" />
                    <input type="hidden" name="cdn" value="true" />
                    <input type="hidden" name="ftp_server" value="true" />

                    <div className="final-price">
                        <label htmlFor="price">Precio Final:</label>
                        <input type="number" id="price" name="package_price" />{/*Debe ir actualizandose en tiempo real según las elecciones del formulario*/}
                    </div>

                    <button type="submit">¡Lo quiero a mi manera!</button>
                </form>


            </article>

            <p>Todos los paquetes personalizados cuentan con SSL, CDN y servidor FTP</p>
        </section>

    )
}

export default Custom;