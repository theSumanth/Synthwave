import {
  Form,
  NavLink,
  json,
  redirect,
  useSearchParams,
} from "react-router-dom";
import AuthLandingScene from "../UI/AuthLandingScene";
import Input from "../UI/Input";
import Button from "../UI/Button";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const type = searchParams.get("type");

  const isLogin = mode === "login";
  const isAdmin = type === "admin";

  let heading = "Sign up - User";
  if (isLogin && isAdmin) heading = "Log in - Admin";
  else if (isLogin) heading = "Login - User";

  return (
    <AuthLandingScene>
      <Form method="POST" className="flex flex-col w-1/5">
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
          placeholder={"Eg. jimhalpert@gmail.com"}
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
          <Button type="submit">{isLogin ? "Log in" : "Sign up"}</Button>
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

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (mode === "login") {
    config.headers = {
      "Content-Type": "application/json",
      // Authorization: "Bearer " + getAuthToken(),
    };
  }

  let url = import.meta.env.VITE_API_URL;

  console.log(url);

  if (type === "admin" && mode === "login") {
    url += "/admin/login";
  } else if (type === "user" && mode === "login") {
    url += "/user/login";
  } else {
    url += "/signup";
  }

  const response = await fetch(url, {
    ...config,
    body: JSON.stringify(authData),
  });

  const resData = await response.json();

  if (!response.ok) {
    return json(
      { message: resData.message, errors: resData.errorData },
      { status: 500 }
    );
  }

  if (resData.token && resData.userId) {
    localStorage.setItem("token", resData.token);
    localStorage.setItem("userId", resData.userId);
  }

  if (resData.userDetails) {
    localStorage.setItem("user", resData.userDetails);
  }

  return redirect("/posts");
}
