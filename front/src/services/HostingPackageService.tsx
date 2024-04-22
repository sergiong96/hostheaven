import { DOMAIN_NAME } from "../constants";


export const getAllStandardPackages = (): Promise<Response> => {
    return fetch(DOMAIN_NAME + 'hostingpackages/standard');
}


