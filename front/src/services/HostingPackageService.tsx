import { DOMAIN_NAME } from "../constants";


export const getAllStandardPackages = () => {
    return fetch(DOMAIN_NAME + 'hostingpackages/standard');
}


