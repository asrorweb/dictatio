// https://api.dictionaryapi.dev/api/v2/entries/en/
// https://api.dictionaryapi.dev/api/v2/entries/en/
import { createContainer } from "./createContainer";

export async function fetchApi(API) {
    const request = await fetch(API);
    const data = await request.json();

    if (request.status === 404 && request.ok === false) {
        throw new Error("error");
    }

    return data[0];
}
