import { useEffect } from 'react';
import './_LogInForm.scss';
import { logIn } from '../../services/UserService';


function LogInForm({ visible }) {



    useEffect(() => {
        handleDialog();
    }, [visible])


    const closeDialog = () => {
        const dialog = document.querySelector("dialog#logIn-dialog");
        dialog.close();
    }

    const handleDialog = () => {
        const dialog = document.querySelector("dialog#logIn-dialog");
        if (visible) {
            dialog.showModal();
        }
    }

    const getFormObject = (form) => {
        const formData = new FormData(form);
        const formObjet = {};

        formData.forEach((value, key) => {
            formObjet[key] = value
        });

        return formObjet;
    }


    const handleLogIn = (event) => {
        event.preventDefault();
        const formObject = getFormObject(event.target);
        const formJSON = JSON.stringify(formObject);
        console.log(formJSON)

        logIn(formJSON).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
        });
    }


    return (
        <dialog id="logIn-dialog">
            <button type="button" id="close-dialog" onClick={closeDialog}>X</button>
            <form method="POST" onSubmit={handleLogIn} id="logIn-form">
                <div>
                    <label htmlFor="mail">Correo electrónico</label>
                    <input type="email" id="mail" name="email" />
                </div>
                <div>
                    <label htmlFor="passw">Contraseña</label>
                    <input type="password" id="passw" name="password" />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </dialog>
    )
}


export default LogInForm;