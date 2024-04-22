import { DOMAIN_NAME } from "../constants";


export const getAllConcepts = (): Promise<Response> => {
    return fetch(DOMAIN_NAME + "glosary/list");
}

