import './_HostingPackagesHome.scss';
import { useState, useEffect } from 'react';
import { getAllStandardPackages } from '../../../services/HostingPackageService';

function HostingPackagesHome() {
    const [hostingPackages, setHostingPackages] = useState([]);

    useEffect(() => {
        getAllStandardPackages().then((res) => {
            return res.json();
        }).then((data) => {
            setHostingPackages(data);
        });
    }, []);


    return (
        <section id="home-packages-container">
            <h2>Contrata ya el plan que mejor se adapte a tus necesidades</h2>
            <article>
                {hostingPackages.map((data) => (
                    <div key={data.id_package} className="package">
                        <p className='name'>{data.package_name}</p>
                        <ul className='characteristics'>
                            <li>Almacenamiento: {data.storage}GB</li>
                            <li>Número de dominios: {data.domains}</li>
                            <li>Tipo de hosting: {data.hosting_type}</li>
                            <li>Ancho de banda mensual: {data.monthly_bandwidth}GB</li>
                            <li>Número de bases de datos: {data.databases}</li>
                            <li>CDN: {data.cdn ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-xmark"></i>}</li>
                            <li>SSL: {data.ssl ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-xmark"></i>}</li>
                            <li>Soporte técnico 24 horas: {data.technical_support_24h ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-xmark"></i>}</li>
                        </ul>
                        <p className='price'><strong>Precio:</strong> {data.package_price}€/mes</p>
                        <div className='btn-to-cart'>
                            <button type="button" id={data.id_package}>¡Lo quiero!</button>
                        </div>
                    </div>
                ))}

            </article>
            <article className='btn-to-cart-custom'>
                <p>O pulsa sobre el botón y configura tu propio plan personalizado <i className="fa-regular fa-circle-right"></i></p>
                <button type="button"> Lo quiero a mi manera <i className="fa-solid fa-champagne-glasses"></i></button>
            </article>


        </section>
    )
}

export default HostingPackagesHome;