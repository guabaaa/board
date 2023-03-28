import Environment from "./Environment";
const Api = async (method, url = "", data = {}, params = {}) => {
    const methods = method.toString().toLowerCase();
    const baseUrl = Environment.base_url + url;
    const headers = {
        "Content-Type": "application/json",
    };
    const queryString = new URLSearchParams(params).toString();
    if (methods === "get" || methods === "delete") {
        const response = await fetch(baseUrl + `?${queryString}`, {
            method: method,
            headers: headers,
        });
        const reponseJson = await response.json();
        return reponseJson?.data;
    } else {
        const response = await fetch(baseUrl + `?${queryString}`, {
            method: method,
            headers: headers,
            body: JSON.stringify(data),
        });
        const reponseJson = await response.json();
        return reponseJson?.data;
    }
};
export default {
    getBoardList: (params) => Api("get", "/board/get", "", params),
    insertBoard: (data) => Api("post", "/board/write", data),
};
