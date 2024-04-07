import './_Register.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useState } from 'react';
import { signIn } from '../../services/UserService';


function Register() {

    const imgRegister = require("../../assets/images/register.jpeg");

    const [paymentSelected, isPaymentSelected] = useState(false);



    const handlePaymentSelected = (event) => {
        let selectedOption = event.target.value;
        selectedOption !== "false" ? isPaymentSelected(true) : isPaymentSelected(false);
    }


    const getFormData = (form) => {
        const formData = new FormData(form);
        const formObject = {};

        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        return formObject;
    }


    async function HandleSubmit(event) {
        event.preventDefault();
        const formData = getFormData(event.target);

        signIn(formData).then((data) => {
            console.log(data);
        });

    }

    return (
        <>
            <Header />
            <main id="register-page">
                <h1>No esperes más y aloja tus proyectos en HostHeaven</h1>
                <section id="register-img-container">
                    <img src={imgRegister} alt="Imagen Registro" />
                </section>
                <section id="register-form-container">
                    <form onSubmit={HandleSubmit}>
                        <div>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" name="name" />
                            <label htmlFor="surname">Apellidos</label>
                            <input type="text" id="surname" name="surname" />
                        </div>

                        <div>
                            <label htmlFor="mail">Email</label>
                            <input type="email" id="mail" name="email" />

                            <label htmlFor="pass">Contraseña</label>
                            <input type="password" id="pass" name="password" />
                        </div>

                        <div>
                            <label htmlFor="pay">Método de Pago (opcional)</label>
                            <select defaultValue={'false'} id="pay" name="payment_method" onChange={handlePaymentSelected}>
                                <option value="false">No añadir por ahora</option>
                                <option value="TARJETA_CREDITO">Tarjeta de crédito</option>
                                <option value="TARJETA_DEBITO">Tarjeta de débito</option>
                                <option value="TRANSFERENCIA">Transferencia</option>
                                <option value="PAYPAL">PayPal</option>
                                <option value="WALLET">Wallet</option>
                            </select>
                            {paymentSelected &&
                                <div>
                                    <label htmlFor="ref">Número de cuenta o referencia</label>
                                    <input type="text" id="ref" name="payment_reference" />
                                </div>}
                        </div>

                        <button type="submit" name="registerSubmit">Finalizar Registro</button>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Register;