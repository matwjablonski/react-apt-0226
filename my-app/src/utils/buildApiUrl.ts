export const buildApiUrl = (endpoint: string): string => {
    // const apiUrl = process.env.VITE_APP_API_URL; // starszy sposób
    const apiUrl = import.meta.env.VITE_APP_API_URL; // dedykowany dla Vite

    let fullApiUrl = `${apiUrl}/${endpoint}`;

    if (endpoint.startsWith('/')) {
        fullApiUrl = endpoint;
    }

    return fullApiUrl
}