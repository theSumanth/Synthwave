import { Form, NavLink, useSearchParams } from "react-router-dom";
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
      <Form className="flex flex-col">
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
          <Button>{isLogin ? "Log in" : "Sign up"}</Button>
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
