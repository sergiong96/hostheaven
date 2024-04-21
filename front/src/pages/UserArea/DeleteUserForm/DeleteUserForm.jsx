import './_DeleteUserForm.scss';
import ServerResponse from '../../../components/ServerResponse/ServerResponse';
import { useState, useEffect } from 'react';
import { deleteUser } from '../../../services/UserService';



function DeleteUserForm({ user_id, onClose }) {
    const [responseData, setResponseData] = useState({
        status: 0,
        response: ""
    });

    const [deleteData, setDeleteData] = useState({
        user_id: user_id,
        password: ""
    })

    useEffect(() => {
        showDialog();
    }, []);


    const showDialog = () => {
        const dialog = document.querySelector("dialog#delete-dialog");
        dialog.showModal();
    }

    const closeDialog = () => {
        const dialog = document.querySelector("dialog#delete-dialog");
        dialog.close();
        onClose();
    }

    const handleChangePass = (event) => {
        setDeleteData({
            ...deleteData,
            password: event.target.value
        })
    }

    const handleSubmitRemove = (event) => {
        event.preventDefault();

        let resStatus = 0;
        setResponseData({
            status: parseInt(resStatus),
            response: ""
        });

        deleteUser(deleteData.user_id, deleteData.password).then((res) => {
            resStatus = res.status;
            return res.json();
        }).then((data) => {
            console.log(data)
            setResponseData({
                status: parseInt(resStatus),
                response: data.response
            });
        })

    }



    return (
        <>
            <dialog id="delete-dialog">
                <button type="button" onClick={closeDialog}>X</button>
                <form id="delete-account-form" onSubmit={handleSubmitRemove}>
                    <div>
                        <label htmlFor="">Introduzca su contraseña:</label>
                        <input type="password" onChange={handleChangePass} />
                    </div>
                    <button type="submit">¿Seguro que desea eliminar su cuenta?</button>
                </form>
            </dialog>
            {responseData.status !== 0 && <ServerResponse responseStatus={responseData.status} response={responseData.response} />}
        </>
    )

}


export default DeleteUserForm;