import { DOMAIN_NAME } from "../constants"


export const createTransaction = (formData: any): Promise<Response> => {

    return new Promise((resolve, reject) => {
        fetch(DOMAIN_NAME + "trades/create", {
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