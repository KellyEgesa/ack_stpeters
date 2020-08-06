import http from "../service/httpService";
import { apiUrl } from "../config.json";

export function checkUser(user) {
  return http.post(apiUrl + "/user", user);
}
