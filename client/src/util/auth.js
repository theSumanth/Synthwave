import { json, redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  return token;
}

export function getUserDetails() {
  const userDetails = JSON.parse(localStorage.getItem("user"));

  return userDetails;
}

export function checkIsAdmin() {
  const userType = localStorage.getItem("typeOfLogin");

  return userType == "admin";
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return json({ message: "NOT AUTHENTICATED" });
  }

  return null;
}

export function checkAuthorized() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/");
  }

  return null;
}
