import { json, redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }

  const duration = getAuthDuration();

  if (duration < 0) {
    return "EXPIRED";
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
  if (token) {
    return token;
  }

  return null;
}

export function getAuthDuration() {
  const date = localStorage.getItem("expiration");
  const expirationDate = new Date(date);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();

  return duration;
}
