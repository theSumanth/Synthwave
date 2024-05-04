import { NavLink } from "react-router-dom";
import Button from "./Button";

import logo from "/images/logo.png";

const AuthLandingScene = ({ children }) => {
  return (
    <section className="h-screen flex flex-col">
      <nav className="flex items-center bg-black bg-opacity-50 shadow-lg p-4 w-full justify-between backdrop-blur">
        <NavLink to={"/"} className="flex items-center gap-2">
          <img
            src={logo}
            alt="Music waves in a shape of a moon"
            className="aspect-square h-12 w-12"
          />
          <h1 className="font-bold text-lg">Synthwave Podcasts</h1>
        </NavLink>
        <div>
          <NavLink to={"/auth?mode=signup&type=user"}>
            <Button textonly>Sign up</Button>
          </NavLink>
          <NavLink to={"/auth?mode=login&type=user"}>
            <Button>Log in</Button>
          </NavLink>
        </div>
      </nav>
      <main className="flex items-center justify-center gap-32 max-md:flex-col lg:flex-row h-screen">
        {children}
        <div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={logo}
              alt="Music waves in a shape of a moon"
              className="aspect-square h-56 w-56"
            />
            <h1 className="font-bold text-3xl mb-4">Synthwave Podcasts</h1>
            <p className="text-center">
              Listen to uninterrupted Podcasts through{" "}
              <span className="text-purple-400 font-semibold">Synthwave</span>.
              <br />
              <span className="text-sm font-bold">
                #StreamSeeminglyThruSynth
              </span>
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AuthLandingScene;
