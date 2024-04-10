import { DOMAIN_NAME } from "../constants";


export const getAllConcepts = () => {
    return fetch(DOMAIN_NAME + "glosary/list");
}

