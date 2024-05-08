import { NavLink } from "react-router-dom";

import { Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { Icon: Linkedin, link: "https://www.linkedin.com/in/sumanthbojugu/" },
    { Icon: Github, link: "https://github.com/theSumanth" },
    { Icon: Instagram, link: "https://www.instagram.com/im.sumanth/" },
  ];

  return (
    <footer className="flex flex-col gap-3 items-center bg-[#151515] bg-opacity-50 shadow-lg p-8 w-full justify-between backdrop-blur">
      <nav className="flex gap-2">
        {footerLinks.map((FooterLink) => (
          <NavLink
            to={FooterLink.link}
            className="flex items-center gap-2"
            key={FooterLink.link}
          >
            <FooterLink.Icon size={30} strokeWidth={2} absoluteStrokeWidth />
          </NavLink>
        ))}
      </nav>

      <div className="flex flex-col gap-1 items-center max-sm:flex-col text-xs text-neutral-400">
        <NavLink
          to={"https://www.linkedin.com/in/sumanthbojugu/"}
          className="hover:underline"
          target="_blank"
        >
          <p>
            Designed by <span>Sumanth Bojugu</span>
          </p>
        </NavLink>
        <NavLink
          to={"https://www.linkedin.com/in/yaswanth-reddy-avula/"}
          className="hover:underline"
        >
          <p>
            Backend by <span>Avula Yashwanth</span>
          </p>
        </NavLink>

        <p className="mt-6 text-neutral-500">
          Copyright &copy; 2024 Sumanth Bojugu.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
