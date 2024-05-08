import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

import { getAuthDuration } from "../util/auth";
import { useEffect } from "react";

const RootLayout = () => {
  const token = useLoaderData();
  const submit = useSubmit();

  const duration = getAuthDuration();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      console.log("EXPIRED");
      submit(null, { method: "POST", action: "/logout" });
    }

    setTimeout(() => {
      submit(null, { method: "POST", action: "/logout" });
    }, duration);
  }, [token, submit, duration]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default RootLayout;
