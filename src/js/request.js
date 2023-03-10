// https://api.dictionaryapi.dev/api/v2/entries/en/
// https://api.dictionaryapi.dev/api/v2/entries/en/
import { createContainer } from "./createContainer";
import { loading } from "./loading";

export async function fetchApi(API) {
    loading(false);
    const request = await fetch(API);
    const data = await request.json();
    loading(true);
    if (request.status === 404 && request.ok === false) {
        throw new Error("error");
    }

    return data[0];
}
