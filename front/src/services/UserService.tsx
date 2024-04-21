import { DOMAIN_NAME } from "../constants";


export const signIn = (formData: any) => {

    return new Promise((resolve, reject) => {
        fetch(DOMAIN_NAME + "users/signIn", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((response) => {
            resolve(response);
        });
    });

}


export const getUserData = (user_id: Number) => {

    return new Promise((resolve, reject) => {
        fetch(DOMAIN_NAME + `users/getUser/${user_id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            resolve(response);
        });
    });
}


export const logIn = (credentials: string) => {

    return new Promise((resolve, reject) => {
        fetch(DOMAIN_NAME + "users/logIn", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: credentials
        }).then((response) => {
            resolve(response);
        });
    });
}


export const updateData = (userData: any) => {

    return new Promise((resolve, reject) => {
        fetch(DOMAIN_NAME + "users/updateUser", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then((response) => {
            if (response.ok) {
                resolve(response);
            } else {
                response.json().then((errorData) => {
                    throw new Error(errorData.response);
                }).catch((error) => {
                    reject(error.response);
                });
            }
        }).catch((error) => {
            reject("Error en la solicitud "+error);
        })
    })
}


export const changePassword = (passwordObj: any) => {

    return new Promise((resolve, reject) => {
        fetch(DOMAIN_NAME + "users/changePassword", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(passwordObj)
        }).then((response) => {
            resolve(response);
        })
    })

}


export const deleteUser = (user_id: any, password: any) => {
    return new Promise((resolve, reject) => {
        fetch(DOMAIN_NAME + `users/delete/${user_id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: password
        }).then((response) => {
            resolve(response);
        })
    });
}