import { NavLink } from "react-router-dom";
import AuthLandingScene from "../UI/AuthLandingScene";
import Button from "../UI/Button";

const LoginLayout = () => {
  return (
    <AuthLandingScene>
      <div className="flex gap-2 flex-col max-md:mt-12">
        <NavLink to={"/auth?mode=login&type=user"}>
          <Button>Log in / Sign up for user</Button>
        </NavLink>
        <Button underline>
          <NavLink to={"/auth?mode=login&type=admin"}>Log in for admin</NavLink>
        </Button>
      </div>
    </AuthLandingScene>
  );
};

export default LoginLayout;
