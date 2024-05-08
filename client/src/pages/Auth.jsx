import {
  Form,
  NavLink,
  json,
  redirect,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import { Toaster, toast } from "sonner";

import AuthLandingScene from "../UI/AuthLandingScene";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { CircleX } from "lucide-react";

const Auth = () => {
  const actionData = useActionData();

  const { state } = useNavigation();

  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const type = searchParams.get("type");

  const isLogin = mode === "login";
  const isAdmin = type === "admin";

  let heading = "Sign up - User";
  if (isLogin && isAdmin) {
    heading = "Log in - Admin";
  } else if (isLogin) {
    heading = "Login - User";
  }

  if (actionData) {
    toast(actionData.message, {
      icon: <CircleX color="white" />,
    });
  }

  return (
    <AuthLandingScene>
      <Form
        method="POST"
        className="flex flex-col lg:w-1/5 max-sm:w-2/3 max-md:mt-6"
      >
        <h1 className="font-bold text-3xl mb-4 text-purple-500">{heading}</h1>
        {!isLogin && (
          <>
            <Input
              label="Name"
              id="name"
              name="name"
              type="text"
              placeholder={"Enter name"}
              required
            />
            <Input
              label="Username"
              id="username"
              name="username"
              type="text"
              placeholder={"Enter username"}
              required
            />
          </>
        )}
        <Input
          label="Email"
          id="email"
          name="email"
          type="mail"
          placeholder={"Enter Email"}
          required
        />
        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder={"Enter Password"}
          required
        />
        <div className="mt-6 flex flex-col">
          <Button type="submit">
            {isLogin
              ? state === "submitting"
                ? "Logging in..."
                : "Login"
              : state === "submitting"
              ? "Signing up..."
              : "Sign up"}
          </Button>
          {!isAdmin && (
            <Button underline type="button">
              <NavLink
                to={`/auth?mode=${isLogin ? "signup" : "login"}&type=${
                  isAdmin ? "admin" : "user"
                }`}
              >
                {isLogin ? "Create a new account." : "Already have an account?"}
              </NavLink>
            </Button>
          )}
        </div>
        <Toaster
          position="bottom-right"
          visibleToasts={1}
          icons={{ error: <CircleX /> }}
          toastOptions={{
            classNames: {
              toast: "bg-red-600",
              title: "text-white",
              description: "text-red-400",
              actionButton: "bg-zinc-400",
              cancelButton: "bg-orange-400",
              closeButton: "bg-lime-400",
            },
          }}
        />
      </Form>
    </AuthLandingScene>
  );
};

export default Auth;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode");
  const type = searchParams.get("type");

  const formData = await request.formData();
  const authData = Object.fromEntries(formData.entries());

  let url = import.meta.env.VITE_API_URL + "/auth/" + mode;

  if (mode === "login") {
    url += "?userType=" + type;
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  const resData = await response.json();

  if (!response.ok) {
    return json({ message: resData.message }, { status: resData.statusCode });
  }

  if (mode === "login") {
    localStorage.setItem("token", resData.token);
    localStorage.setItem("user", JSON.stringify(resData.userDetails));
    localStorage.setItem("typeOfLogin", resData.userType);

    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 2);

    localStorage.setItem("expiration", expirationDate.toISOString());
  }
  if (mode === "signup") {
    return redirect("/");
  }
  return redirect("/home");
}
