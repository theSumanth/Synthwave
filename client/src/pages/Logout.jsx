import { redirect } from "react-router-dom";

export function action() {
  console.log("Logout Action hit");
  localStorage.removeItem("token");
  localStorage.removeItem("typeOfLogin");
  localStorage.removeItem("user");
  localStorage.removeItem("expiration");

  return redirect("/");
}
