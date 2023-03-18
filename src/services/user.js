import { moduleApi } from "../helper/apiList";
import { fetchUrl } from "./fetchUrl";

export const fetchUserList = (data) =>
    new Promise((resolve, reject) => {
        fetchUrl(moduleApi.user.method, moduleApi.user.url, data).then((res) => {
            resolve(res);
        }).catch((err) => reject(err));
    })