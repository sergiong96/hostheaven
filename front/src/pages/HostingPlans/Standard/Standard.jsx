import './_Standard.scss';
import { getAllStandardPackages } from '../../../services/HostingPackageService';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Standard() {

    const [hostingPackages, setHostingPackages] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getAllStandardPackages().then((res) => {
            return res.json();
        }).then((data) => {
            setHostingPackages(data);
        });
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("sessionToken");

        if (token) {
            setIsLoggedIn(true);
        }
    }, [])


    const handlePaymentClick = (event) => {
        if (!isLoggedIn) {
            alert("Necesita autenticarse antes de contratar cualquier servicio");
        } else {
            const packageData = getPackageData(event.target);
            navigate("/payment", { state: { packageData: packageData } });
        }
    }

    const getPackageData = (button) => {
        const div = button.closest("div[class^=package]");
        const list = div.querySelectorAll("ul.characteristics > li"); 
        const price = div.querySelector("p.price");

        const packageData = {};
        packageData["id_package"] = div.id.toString();
        list.forEach((element) => {
            packageData[element.dataset.name] = element.dataset.value.toString();
        });

        packageData[price.dataset.name] = price.dataset.value.toString();

        return packageData;
    }


    return (
        <section id="standard-packages">
            {hostingPackages.map((data) => (
                <div key={data.id_package} id={data.id_package} className={"package "+data.package_name}>
                    <span className='img-server' id={data.package_name}></span>
                    <p className='name'>{data.package_name}</p>
                    <ul className='characteristics'>
                        <li data-name="storage" data-value={data.storage}>Almacenamiento: {data.storage}GB</li>
                        <li data-name="domains" data-value={data.domains}>Número de dominios: {data.domains}</li>
                        <li data-name="type" data-value={data.hosting_type}>Tipo de hosting: {data.hosting_type}</li>
                        <li data-name="bandwidth" data-value={data.monthly_bandwidth}>Ancho de banda mensual: {data.monthly_bandwidth}GB</li>
                        <li data-name="databases" data-value={data.databases}>Número de bases de datos: {data.databases}</li>
                        <li data-name="cdn" data-value={data.cdn ? 'true' : 'false'}>CDN: {data.cdn ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-xmark"></i>}</li>
                        <li data-name="ssl" data-value={data.ssl ? 'true' : 'false'}>SSL: {data.ssl ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-xmark"></i>}</li>
                        <li data-name="support" data-value={data.technical_support_24h ? 'true' : 'false'}>Soporte técnico 24 horas: {data.technical_support_24h ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-xmark"></i>}</li>
                    </ul>
                    <p className='price' data-name="price" data-value={data.package_price}><strong>Precio:</strong> <input type="number" name="price" defaultValue={data.package_price} />€/mes</p>
                    <div className='btn-to-cart'>
                        <button type="button" id={data.id_package} onClick={handlePaymentClick}>¡Lo quiero!</button>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Standard;