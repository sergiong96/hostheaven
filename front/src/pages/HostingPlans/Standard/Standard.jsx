import './_Standard.scss';
import { getAllStandardPackages } from '../../../services/HostingPackageService';
import { useEffect, useState } from 'react';

function Standard() {

    const [hostingPackages, setHostingPackages] = useState([]);

    useEffect(() => {
        getAllStandardPackages().then((res) => {
            return res.json();
        }).then((data) => {
            setHostingPackages(data);
        });
    }, []);


    return (
        <section id="standard-packages">
            {hostingPackages.map((data) => (
                <div key={data.id_package} className={"package "+data.package_name}>
                    <span className='img-server' id={data.package_name}></span>
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
        </section>
    )
}

export default Standard;