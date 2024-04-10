import './_Payment.scss';

function Payment({hostingPackageData}) {
    return (
        <main id="payment-page">
            <form action="">
                <section id="period">
                    <p>1. Elige un período</p>
                    <article id="1month">
                        <input type="radio" name="time-period" id="1month" />
                        <p>1 mes</p>
                        <p>El mes te sale a: </p>
                    </article>
                    <article id="12month">
                        <input type="radio" name="time-period" id="12month" />
                        <p>12 meses</p>
                        <p>El mes te sale a: </p>
                    </article>
                    <article id="24month">
                        <input type="radio" name="time-period" id="24month" />
                        <p>24 mes</p>
                        <p>El mes te sale a: </p>
                    </article>
                </section>
                <section id="payment-method">
                    <p>2. Elige un método de pago</p>
                    <article>
                        <div>
                            <label htmlFor="credit">Tarjeta de crédito</label>
                            <input type="radio" name="payment_method" id="credit" />
                        </div>
                        <div>
                            <label htmlFor="debit">Tarjeta de débito</label>
                            <input type="radio" name="payment_method" id="debit" />
                        </div>
                        <div>
                            <label htmlFor="transfer">Transferencia</label>
                            <input type="radio" name="payment_method" id="transfer" />
                        </div>
                        <div>
                            <label htmlFor="paypal">Paypal</label>
                            <input type="radio" name="payment_method" id="paypal" />
                        </div>
                        <div>
                            <label htmlFor="wallet">Wallet</label>
                            <input type="radio" name="payment_method" id="wallet" />
                        </div>
                    </article>
                    <article>
                        <input type="text" placeholder='Nombre del titular' />
                        <input type="text" placeholder='Número de tarjeta' />
                        <div>
                            <input type="date" placeholder='Fecha de vencimiento' />
                            <input type="number" placeholder='Código de seguridad' />
                        </div>
                    </article>
                </section>
                <section id="summary">
                    <p>3. Resumen del pedido</p>

                    <article id="user-data">
                        <div>
                            <label htmlFor="">Nombre usuario</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Correo electrónico de confirmación</label>
                            <input type="email" />
                        </div>
                    </article>

                    <article id="package-data">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <div>
                            <label htmlFor="">Precio: </label>
                            <input type="text" />
                        </div>
                    </article>


                </section>
                <button type="button">¡Haz tu Sitio Realidad!</button>
            </form>
        </main>
    );
};

export default Payment;