import http from "../service/httpService";
import { apiUrl } from "../config.json";

export function getWorshippers(WorshippersId) {
  return http.get(apiUrl + "/worshippers/" + WorshippersId);
}

export function deleteWorshippers(WorshippersId) {
  return http.delete(apiUrl + "/worshippers/" + WorshippersId);
}

export function saveWorshipper(worshipper) {
  return http.post(apiUrl + "/worshippers", worshipper);
}

export function getService(serviceId) {
  return http.get(apiUrl + "/services/" + serviceId);
}
