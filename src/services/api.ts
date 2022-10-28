const token = '074d6e69317741e82c74e7809c7516c49c3f0f5e ';
const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';

async function checkResponse(res: Response) {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(await res.json());
    }
}

export const getAddress = (query: string) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${token}`
        },
        body: JSON.stringify({ query })
    })
        .then(res => checkResponse(res))
        .catch(error => {
            console.log(error)
        })
}