import { redirect } from "react-router-dom";

export function loader() {
  console.log("Logout Action hit");
  localStorage.removeItem("token");
  localStorage.removeItem("typeOfLogin");
  localStorage.removeItem("user");

  return redirect("/");
}
