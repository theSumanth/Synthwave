import { NavLink } from "react-router-dom";

import logo from "/images/logo.png";
import Button from "./Button";
import Footer from "./Footer";

const AuthLandingScene = ({ children }) => {
  return (
    <section className="flex flex-col">
      <nav className="flex items-center bg-[#151515] max-md:sticky fixed top-0 bg-opacity-50 shadow-lg p-4 w-full justify-between backdrop-blur-md">
        <NavLink to={"/"} className="flex items-center gap-2">
          <img
            src={logo}
            alt="Music waves in a shape of a moon"
            className="aspect-square h-12 w-12 max-sm:h-8 max-sm:w-8"
          />
          <h1 className="font-bold text-lg max-sm:text-base">
            Synthwave Music
          </h1>
        </NavLink>
        <div className="flex items-center max-sm:flex-col max-sm:text-xs">
          <NavLink to={"/auth?mode=signup&type=user"}>
            <Button textonly>Sign up</Button>
          </NavLink>
          <NavLink to={"/auth?mode=login&type=user"}>
            <Button>Log in</Button>
          </NavLink>
        </div>
      </nav>
      <main className="flex items-center justify-center gap-32 max-md:gap-16 max-md:flex-col lg:flex-row md:h-screen">
        {children}
        <div className="flex flex-col items-center justify-center max-md:mb-8">
          <img
            src={logo}
            alt="Music waves in a shape of a moon"
            className="aspect-square h-56 w-56"
          />
          <h1 className="font-bold text-3xl mb-4">Synthwave Music</h1>
          <p className="text-center">
            Listen to uninterrupted music through{" "}
            <span className="text-purple-400 font-semibold">Synthwave</span>.
            <br />
            <span className="text-sm font-bold">#StreamSeeminglyThruSynth</span>
          </p>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default AuthLandingScene;
