import { useEffect, useState } from 'react';
import './_ServerResponse.scss';


function ServerResponse({ responseStatus, response }) {

    const [bgColor, setbgColor] = useState("white");
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (responseStatus >= 100 && responseStatus <= 199) {
            setbgColor("#1985e3");
        } else if (responseStatus >= 200 && responseStatus <= 299) {
            setbgColor("#33cc4a");
        } else if (responseStatus >= 300 && responseStatus <= 399) {
            setbgColor("#1985e3");
        } else if (responseStatus >= 400 && responseStatus <= 499) {
            setbgColor("#c91616");
        } else if (responseStatus >= 500 && responseStatus <= 599) {
            setbgColor("#c91616");
        }


        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [responseStatus]);


    if (!isVisible) {
        return null;
    }


    return (
        <section id="server-response" style={{ backgroundColor: bgColor }}>
            <p>{response}</p>
        </section >
    )

}


export default ServerResponse;