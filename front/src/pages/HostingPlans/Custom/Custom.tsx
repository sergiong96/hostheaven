import { useState, useEffect } from 'react';
import './_Custom.scss';
import { useNavigate, NavigateFunction } from 'react-router';

function Custom() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const navigate: NavigateFunction = useNavigate();
    const hash: string = window.location.hash;

    useEffect(() => {
        const token: string | null = localStorage.getItem("sessionToken");

        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        if (hash) {
            const fragment: Element | null = document.querySelector(hash);
            if (fragment) {
                fragment.scrollIntoView();
            }
        }
    }, [hash]);


    // Funcion para calcular el precio del paquete en tiempo real
    const setPrice = (app_install: string, databases: number, domains: number, email_accounts: number, hosting_type: string, migration: string, bandwidth: number, storage: number, support: string): number => {

        // Parseo del tipo de los datos y se evitan los negativos
        let app_install_parsed: boolean = app_install.toLowerCase() === "yes" ? true : false;
        let databases_parsed: number = databases < 0 ? 0 : databases;
        let domains_parsed: number = domains < 0 ? 0 : domains;
        let email_accounts_parsed: number = email_accounts < 0 ? 0 : email_accounts;
        let hosting_type_parsed: string = hosting_type.toUpperCase();
        let migration_parsed: boolean = migration.toLowerCase() === "yes" ? true : false;
        let bandwidth_parsed: number = bandwidth < 0 ? 0 : bandwidth;
        let storage_parsed: number = storage < 0 ? 0 : storage;
        let support_parsed: boolean = support.toLowerCase() === "yes" ? true : false;

        let precio_final: number = 0.0;

        // Instalador de app
        if (app_install_parsed) {
            precio_final += 0.5;
        }

        // Bases de datos
        if (databases_parsed > 0 && databases_parsed <= 10) {
            precio_final += (databases_parsed * 0.25);
        } else if (databases_parsed > 10 && databases_parsed <= 20) {
            precio_final += (databases_parsed * 0.50);
        } else if (databases_parsed > 20) {
            precio_final += (databases_parsed * 0.75);
        }

        // Dominios
        if (domains_parsed > 0 && domains_parsed <= 10) {
            precio_final += (domains_parsed * 0.25);
        } else if (domains_parsed > 10 && domains_parsed <= 20) {
            precio_final += (domains_parsed * 0.50);
        } else if (domains_parsed > 20) {
            precio_final += (domains_parsed * 0.75);
        }

        // Cuentas de correo
        if (email_accounts_parsed > 0 && email_accounts_parsed <= 10) {
            precio_final += (email_accounts_parsed * 0.25);
        } else if (email_accounts_parsed > 10 && email_accounts_parsed <= 20) {
            precio_final += (email_accounts_parsed * 0.50);
        } else if (email_accounts_parsed > 20) {
            precio_final += (email_accounts_parsed * 0.75);
        }

        // Tipo de hosting
        switch (hosting_type_parsed) {
            case "WORDPRESS":
                precio_final += 1;
                break;
            case "COMPARTIDO":
                precio_final += 2;
                break;
            case "VPS":
                precio_final += 5;
                break;
            case "CLOUD":
                precio_final += 5;
                break;
            case "DEDICADO":
                precio_final += 10;
                break;
            default:
                precio_final += 0;
        }

        // Migración
        if (migration_parsed) {
            precio_final += 0.5;
        }

        // Ancho de banda mensual
        if (bandwidth_parsed > 0 && bandwidth_parsed <= 100) {
            precio_final += 1;
        } else if (bandwidth_parsed > 100 && bandwidth_parsed <= 300) {
            precio_final += 2;
        } else if (bandwidth_parsed > 300 && bandwidth_parsed <= 500) {
            precio_final += 3;
        } else if (bandwidth_parsed > 500 && bandwidth_parsed <= 1000) {
            precio_final += 5;
        } else if (bandwidth_parsed > 1000) {
            precio_final += 10;
        }

        // Almacenamiento
        if (storage_parsed > 0 && storage_parsed <= 10) {
            precio_final += (storage_parsed * 0.25);
        } else if (storage_parsed > 10 && storage_parsed <= 20) {
            precio_final += (storage_parsed * 0.30);
        } else if (storage_parsed > 20 && storage_parsed <= 30) {
            precio_final += (storage_parsed * 0.35);
        } else if (storage_parsed > 30 && storage_parsed <= 50) {
            precio_final += (storage_parsed * 0.40);
        } else if (storage_parsed > 50) {
            precio_final += (storage_parsed * 0.45);
        }

        // Soporte
        if (support_parsed) {
            precio_final += 0.5;
        }


        return precio_final;
    }

    const handleChange = () => {

        const priceTarget: HTMLInputElement | null = document.querySelector("div.final-price input#price");
        const form: HTMLFormElement | null = document.querySelector("#custom-creator-form");
        if (form) {
            const formData: FormData = new FormData(form);
            const appInstall: string = (formData.get("app_installation") as string) ?? "false";
            const databases: number = parseInt(formData.get("databases") as string || "0");
            const domains: number = parseInt(formData.get("domains") as string || "0");
            const email: number = parseInt(formData.get("email_account") as string || "0");
            const type: string = (formData.get("type") as string) ?? "false";
            const migration: string = (formData.get("migration") as string) ?? "false";
            const bandwidth: number = parseInt(formData.get("bandwidth") as string || "0");
            const storage: number = parseInt(formData.get("storage") as string || "0");
            const support: string = (formData.get("technical_support_24h") as string) ?? "false";
            let priceUpdate: number = 0;

            priceUpdate = setPrice(appInstall, databases, domains, email, type, migration, bandwidth, storage, support);

            if (priceTarget) {
                priceTarget.value = priceUpdate.toString();
            }

        }

    }


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!isLoggedIn) {
            alert("Necesita autenticarse antes de contratar cualquier servicio");
        } else {
            const form: HTMLFormElement = event.currentTarget as HTMLFormElement;
            const formData = new FormData(form);
            let packageData: { [key: string]: string } = {};

            formData.forEach((value, key) => {
                packageData[key] = value as string;
            });

            navigate("/payment", { state: { packageData: packageData } });
        }


    }

    return (
        <section id="custom-creator-container">
            <h2>¿Nuestros paquetes preconfigurados no te convencen?</h2>
            <h3>No hay problema, crea el tuyo propio</h3>
            <article>
                <form action="#" id="custom-creator-form" onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="name">Nombre del paquete</label>
                        <input type="text" id="name" name="package_name" />
                    </div>
                    <div>
                        <div>
                            <label htmlFor="type">Tipo de Hosting</label>
                            <select name="type" id="type" onChange={handleChange}>
                                <option value="COMPARTIDO">Compartido</option>
                                <option value="VPS">VPS</option>
                                <option value="DEDICADO">Dedicado</option>
                                <option value="CLOUD">Cloud</option>
                                <option value="WORDPRESS">WordPress</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="cap">Capacidad de almacenamiento (GB)</label>
                            <input type="number" id="cap" name="storage" onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="banda">Ancho de banda mensual (GB/mes)</label>
                            <input type="number" id="banda" name="bandwidth" onChange={handleChange} />
                        </div>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="doms">Número de dominios</label>
                            <input type="number" id="doms" name="domains" onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="databases">Bases de datos</label>
                            <input type="number" id="databases" name="databases" onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="emails">Cuentas de correo</label>
                            <input type="number" id="emails" name="email_account" onChange={handleChange} />
                        </div>
                    </div>

                    <div className="booleans">
                        <div>
                            <label htmlFor="support">¿Soporte técnico 24 horas?</label>
                            <select name="technical_support_24h" id="support" onChange={handleChange}>
                                <option value="true">Sí</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="install">¿Instalador de aplicaciones?</label>
                            <select name="app_installation" id="install" onChange={handleChange}>
                                <option value="true">Sí</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="mig">¿Migración de datos?</label>
                            <select name="migration" id="mig" onChange={handleChange}>
                                <option value="true">Sí</option>
                                <option value="false">No</option>
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
                        <input type="text" id="price" name="price" defaultValue={'0€'} />{/*Debe ir actualizandose en tiempo real según las elecciones del formulario*/}
                    </div>

                    <button type="submit">¡Lo quiero a mi manera!</button>
                </form>


            </article>

            <p>Todos los paquetes personalizados cuentan con SSL, CDN y servidor FTP</p>
        </section>

    )
}

export default Custom;