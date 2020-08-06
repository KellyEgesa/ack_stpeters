import http from "../service/httpService";
import { apiUrl } from "../config.json";

export function getService() {
  return http.get(apiUrl + "/services");
}

export function deleteService(serviceId) {
  return http.delete(apiUrl + "/services/" + serviceId);
}

export function saveService(service) {
  return http.post(apiUrl + "/services", service);
}

export function printService(serviceId) {
  return http.get(apiUrl + "/services/print/" + serviceId);
}
