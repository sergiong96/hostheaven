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