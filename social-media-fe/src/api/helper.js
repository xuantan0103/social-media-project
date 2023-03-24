export const getContentType = () => {
    return {
        headers: {
            'Content-Type': "application/json",
        }
    } 
}

export const API = process.env.REACT_APP_API_URL;