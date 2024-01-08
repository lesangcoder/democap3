import axios from "axios";
import { getLocal } from "../utils/localStore";

const BASE_URL = "https://movienew.cybersoft.edu.vn";

const TokenCybersoft =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOSIsIkhldEhhblN0cmluZyI6IjE4LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNTk5MDQwMDAwMCIsIm5iZiI6MTY5MjI5MTYwMCwiZXhwIjoxNzE2MTM4MDAwfQ.qCglC_oyHM79HVc5mRXJfocVkww4VUpWO7ug7MWtJoY";

const tokenAuthorization = getLocal("user");

const configHeaderAxios = () => {
    return {
        TokenCybersoft,
        Authorization: "Bearer " + tokenAuthorization?.accessToken,
    };
};

export const https = axios.create({
    baseURL: BASE_URL,
    headers: configHeaderAxios(),
});
