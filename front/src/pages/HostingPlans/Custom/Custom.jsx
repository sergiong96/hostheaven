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

    // Funcion para calcular el precio del paquete en tiempo real
    // function setPrice(app_install, databases, domains, email_accounts, hosting_type, migration, bandwidth, storage, support) {

    //     // Parseo del tipo de los datos y se evitan los negativos
    //     let app_install_parsed = app_install.toLowerCase() === "si" ? true : false;
    //     let databases_parsed = parseInt(databases < 0 ? 0 : databases);
    //     let domains_parsed = parseInt(domains < 0 ? 0 : domains);
    //     let email_accounts_parsed = parseInt(email_accounts < 0 ? 0 : email_accounts);
    //     let hosting_type_parsed = hosting_type.toUpperCase();
    //     let migration_parsed = migration.toLowerCase() === "si" ? true : false;
    //     let bandwidth_parsed = parseInt(bandwidth < 0 ? 0 : bandwidth);
    //     let storage_parsed = parseInt(storage < 0 ? 0 : storage);
    //     let support_parsed = support.toLowerCase() === "si" ? true : false;
    
    //     let precio_final = 0.0;
    
    //     // Instalador de app
    //     if (app_install_parsed) {
    //         precio_final += 0.5;
    //     }
    
    //     // Bases de datos
    //     if (databases_parsed > 0 && databases_parsed <= 10) {
    //         precio_final += (databases_parsed * 0.25);
    //     } else if (databases_parsed > 10 && databases_parsed <= 20) {
    //         precio_final += (databases_parsed * 0.50);
    //     } else if (databases_parsed > 20) {
    //         precio_final += (databases_parsed * 0.75);
    //     }
    
    //     // Dominios
    //     if (domains_parsed > 0 && domains_parsed <= 10) {
    //         precio_final += (domains_parsed * 0.25);
    //     } else if (domains_parsed > 10 && domains_parsed <= 20) {
    //         precio_final += (domains_parsed * 0.50);
    //     } else if (domains_parsed > 20) {
    //         precio_final += (domains_parsed * 0.75);
    //     }
    
    //     // Cuentas de correo
    //     if (email_accounts_parsed > 0 && email_accounts_parsed <= 10) {
    //         precio_final += (email_accounts_parsed * 0.25);
    //     } else if (email_accounts_parsed > 10 && email_accounts_parsed <= 20) {
    //         precio_final += (email_accounts_parsed * 0.50);
    //     } else if (email_accounts_parsed > 20) {
    //         precio_final += (email_accounts_parsed * 0.75);
    //     }
    
    //     // Tipo de hosting
    //     switch (hosting_type_parsed) {
    //         case "WORDPRESS":
    //             precio_final += 1;
    //             break;
    //         case "COMPARTIDO":
    //             precio_final += 2;
    //             break;
    //         case "VPS":
    //             precio_final += 5;
    //             break;
    //         case "CLOUD":
    //             precio_final += 5;
    //             break;
    //         case "DEDICADO":
    //             precio_final += 10;
    //             break;
    //     }
    
    //     // Migración
    //     if (migration_parsed) {
    //         precio_final += 0.5;
    //     }
    
    //     // Ancho de banda mensual
    //     if (bandwidth_parsed > 0 && bandwidth_parsed <= 100) {
    //         precio_final += 1;
    //     } else if (bandwidth_parsed > 100 && bandwidth_parsed <= 300) {
    //         precio_final += 2;
    //     } else if (bandwidth_parsed > 300 && bandwidth_parsed <= 500) {
    //         precio_final += 3;
    //     } else if (bandwidth_parsed > 500 && bandwidth_parsed <= 1000) {
    //         precio_final += 5;
    //     } else if (bandwidth_parsed > 1000) {
    //         precio_final += 10;
    //     }
    
    //     // Almacenamiento
    //     if (storage_parsed > 0 && storage_parsed <= 10) {
    //         precio_final += (storage_parsed * 0.25);
    //     } else if (storage_parsed > 10 && storage_parsed <= 20) {
    //         precio_final += (storage_parsed * 0.30);
    //     } else if (storage_parsed > 20 && storage_parsed <= 30) {
    //         precio_final += (storage_parsed * 0.35);
    //     } else if (storage_parsed > 30 && storage_parsed <= 50) {
    //         precio_final += (storage_parsed * 0.40);
    //     } else if (storage_parsed > 50) {
    //         precio_final += (storage_parsed * 0.45);
    //     }
    
    //     // Soporte
    //     if (support_parsed) {
    //         precio_final += 0.5;
    //     }
    
    
    //     return parseFloat(precio_final);
    // }
    
    // let app_install = "si";
    // let databases = 1;
    // let domains = 1;
    // let emails = 1;
    // let hosting_type = "COMPARTIDO";
    // let migration = "si";
    // let ancho_banda = 100;
    // let storage = 1;
    // let support = "";
    
    // let precioMensual = setPrice(app_install, databases, domains, emails, hosting_type, migration, ancho_banda, storage, support);
    // let precio12meses = (precioMensual - (precioMensual * 0.15)) * 12;
    // let ahorro12meses = (precioMensual * 12) - (precio12meses);
    
    // let precio24meses = (precioMensual - (precioMensual * 0.20)) * 24;
    // let ahorro24meses = (precioMensual * 24) - (precio24meses);
    
    // console.log(`El precio por 1 mes es de: ${precioMensual}.`);
    // console.log(`El precio por 12 meses sería de: ${precio12meses}. Lo que supone un ahorro anual de ${ahorro12meses}`);
    // console.log(`El precio por 24 meses sería de: ${precio24meses}. Lo que supone un ahorro anual de ${ahorro24meses / 2}`);

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