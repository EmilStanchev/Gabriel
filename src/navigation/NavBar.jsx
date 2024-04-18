import { useState } from "react";
import LinkWithAnimation from "../components/UI/LinkWithAnimation";
import HomeLink from "../components/UI/HomeLink";

const NavBar = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const clickHandle = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  const navLinks = [
    { name: "Home", url: "home" },
    { name: "Services", url: "services" },
    { name: "About", url: "about" },
    { name: "Gallery", url: "gallery" },
    { name: "Contact", url: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-xl">
      <div className="section-container py-5 flex items-center justify-between text-black">
        <HomeLink
          path="home"
          text="Gabriel"
          className="font-serif text-base lg:text-3xl font-medium uppercase"
        />
        <div className="absolute -bottom-1 bg-black h-[1px] w-0 group-hover:w-5 transition-all duration-300"></div>
        <ul className={`text-sm hidden md:flex space-x-6 `}>
          {navLinks.map((navLink, index) => (
            <li key={index} className="group relative">
              <LinkWithAnimation
                path={navLink.url}
                text={navLink.name}
                color="black"
                hoverColor="black"
              />
              {location.pathname === navLink.url && (
                <div className="absolute -bottom-1 bg-black h-[1px] w-5 group-hover:w-5"></div>
              )}
              <div className="absolute -bottom-1 bg-black h-[1px] w-0 group-hover:w-5 transition-all duration-300"></div>
            </li>
          ))}
        </ul>
        <button
          onClick={clickHandle}
          className="flex flex-col space-y-[5px] items-end md:hidden"
        >
          <div className="h-[2px] w-6 bg-black rounded-lg"></div>
          <div className="h-[2px] w-8 bg-black rounded-lg"></div>
          <div className="h-[2px] w-4 bg-black rounded-lg"></div>
        </button>
      </div>
      <div className={`${isNavBarOpen ? "flex" : "hidden "} `}>
        <ul className="flex flex-col justify-center shadow-lg w-full items-end px-5">
          {navLinks.map((navLink, index) => (
            <li key={index} className="group relative float-end">
              <LinkWithAnimation
                path={navLink.url}
                text={navLink.name}
                color="black"
                hoverColor="black"
                onClick={clickHandle}
              />
              {location.pathname === navLink.url && (
                <div className="absolute -bottom-1 bg-black h-[1px] w-5 group-hover:w-5"></div>
              )}
              <div className="absolute -bottom-1 bg-black h-[1px] w-0 group-hover:w-5 transition-all duration-300"></div>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
