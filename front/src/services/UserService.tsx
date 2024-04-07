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
