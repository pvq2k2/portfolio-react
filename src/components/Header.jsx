import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import useDarkMode from "../hook/useDarkMode";

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [navToggle, setNavToggle] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add("shadow-md")
      : header.classList.remove("shadow-md");
  };
  /*==================== REMOVE MENU MOBILE ====================*/
  const navLink = document.querySelectorAll(".nav__link");
  function linkAction() {
    setNavToggle(!navToggle);
  }
  Array.from(navLink).forEach((n) => n.addEventListener("click", linkAction));
  return (
    <header id="header">
      <div className="header fixed right-0 left-0 z-[1030] bg-slate-50 dark:bg-[#1F2235] transition duration-500">
        <div className="flex justify-between mx-auto px-4 xl:w-[1200px]">
          <div className="logo h-[50px] pt-3 sm:pt-7">
            <Link to="home" activeClass="active" spy={true} smooth={true} offset={0} duration={1000}>
              <p className="sm:text-[30px] text-2xl font-extrabold cursor-pointer uppercase text-[#3e6ff4]">
                QUYET
              </p>
            </Link>
          </div>
          <div className="mobile-nav">
            <div className="slicknav_menu flex justify-between sm:hidden">
              <div
                onClick={() => setTheme(colorTheme)}
                className="toggle mt-3 h-5 w-5"
              >
                {colorTheme === "light" ? (
                  <i className="bx bx-sun text-2xl text-[#3e6ff4] cursor-pointer" />
                ) : (
                  <i className="bx bx-moon text-2xl text-[#3e6ff4] cursor-pointer" />
                )}
              </div>
              <div>
                <div
                  className="mt-[10px] ml-2 transition duration-300"
                  onClick={() => setNavToggle(!navToggle)}
                >
                  {navToggle ? (
                    <i className="bx bx-menu text-3xl text-[#3e6ff4] cursor-pointer" />
                  ) : (
                    <i className="bx bx-x text-3xl text-[#3e6ff4] cursor-pointer" />
                  )}
                </div>
                <div
                  className={
                    navToggle
                      ? "lg:hidden xl:hidden invisible fixed top-[50px] right-0 left-0 bottom-0 bg-black/30 z-20"
                      : "lg:hidden xl:hidden visible fixed top-[50px] right-0 left-0 bottom-0 bg-black/30 z-20"
                  }
                  onClick={() => setNavToggle(!navToggle)}
                >
                  <div
                    className={
                      navToggle
                        ? "fixed top-[50px] right-[-100%] w-[320px] h-full p-8 bg-slate-100 dark:bg-[#0b0d15] transition-all duration-500 shadow-lg"
                        : "fixed top-[50px] right-[0] w-[320px] h-full p-8 bg-slate-100 dark:bg-[#0b0d15] transition-all duration-500 shadow-lg"
                    }
                  >
                    <ul className="nav navbar-nav navbar-right">
                      <li className="nav__link block relative">
                        <Link
                          to="home" activeClass="active" spy={true} smooth={true} offset={0} duration={1000}
                          className="cursor-pointer hover:after:absolute hover:after:h-[3px] hover:after:w-20 hover:after:left-4 hover:after:right-0 hover:after:top-10 hover:after:bg-[#3e6ff4]"
                        >
                          <p className="text-[#3e6ff4] text-[15px] font-semibold uppercase py-[10px] px-[15px]">
                            Home
                          </p>
                        </Link>
                      </li>
                      <li className="nav__link block relative">
                        <Link
                          to="about" activeClass="active" spy={true} smooth={true} offset={0} duration={1000}
                          className="cursor-pointer hover:after:absolute hover:after:h-[3px] hover:after:w-20 hover:after:left-4 hover:after:right-0 hover:after:top-10 hover:after:bg-[#3e6ff4]"
                        >
                          <p className="text-[#3e6ff4] text-[15px] font-semibold uppercase py-[10px] px-[15px]">
                            About
                          </p>
                        </Link>
                      </li>
                      <li className="nav__link block relative">
                        <Link
                          to="skill" activeClass="active" spy={true} smooth={true} offset={0} duration={1000}
                          className="cursor-pointer hover:after:absolute hover:after:h-[3px] hover:after:w-20 hover:after:left-4 hover:after:right-0 hover:after:top-10 hover:after:bg-[#3e6ff4]"
                        >
                          <p className="text-[#3e6ff4] text-[15px] font-semibold uppercase py-[10px] px-[15px]">
                            Skill
                          </p>
                        </Link>
                      </li>
                      <li className="nav__link block relative">
                        <Link
                          to="portfolio" activeClass="active" spy={true} smooth={true} offset={0} duration={1000}
                          className="cursor-pointer hover:after:absolute hover:after:h-[3px] hover:after:w-20 hover:after:left-4 hover:after:right-0 hover:after:top-10 hover:after:bg-[#3e6ff4]"
                        >
                          <p className="text-[#3e6ff4] text-[15px] font-semibold uppercase py-[10px] px-[15px]">
                            Portfolio
                          </p>
                        </Link>
                      </li>
                      <li className="nav__link block relative">
                        <Link
                          to="contact" activeClass="active" spy={true} smooth={true} offset={0} duration={1000}
                          className="cursor-pointer hover:after:absolute hover:after:h-[3px] hover:after:w-20 hover:after:left-4 hover:after:right-0 hover:after:top-10 hover:after:bg-[#3e6ff4]"
                        >
                          <p className="text-[#3e6ff4] text-[15px] font-semibold uppercase py-[10px] px-[15px]">
                            Contact
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="nav__menu"
            className="sm:my-5 mr-4 hidden sm:flex transition duration-300"
          >
            <ul className="nav navbar-nav navbar-right inline-block">
              <li className="nav__menu relative inline-block">
                <Link
                  to="home" activeClass="active" spy={true} smooth={true} offset={0} duration={1000}
                  className="cursor-pointer hover:after:absolute hover:after:h-[3px] hover:after:left-0 hover:after:right-0 hover:after:m-auto hover:after:top-10 hover:after:bg-[#3e6ff4]"
                >
                  <p className="text-[#3e6ff4] text-[15px] font-semibold uppercase py-[10px] px-[15px]">
                    Home
                  </p>
                </Link>
              </li>
              <li className="nav__menu relative inline-block">
                <Link
                  to="about"
                  activeClass="after:absolute after:h-[3px] after:left-0 after:right-0 after:m-auto after:top-10 after:bg-[#3e6ff4]"
                  spy={true} smooth={true} offset={-83} duration={1000}
                  className="cursor-pointer hover:after:absolute hover:after:h-[3px] hover:after:left-0 hover:after:right-0 hover:after:m-auto hover:after:top-10 hover:after:bg-[#3e6ff4]"
                >
                  <p className="text-[#3e6ff4] text-[15px] font-semibold uppercase py-[10px] px-[15px]">
                    About
                  </p>
                </Link>
              </li>
              <li className="nav__menu relative inline-block">
                <Link
                  to="skill" 
                  activeClass="after:absolute after:h-[3px] after:left-0 after:right-0 after:m-auto after:top-10 after:bg-[#3e6ff4]"
                  spy={true} smooth={true} offset={-83} duration={1000}
                  className="cursor-pointer hover:after:absolute hover:after:h-[3px] hover:after:left-0 hover:after:right-0 hover:after:m-auto hover:after:top-10 hover:after:bg-[#3e6ff4]"
                >
                  <p className="text-[#3e6ff4] text-[15px] font-semibold uppercase py-[10px] px-[15px]">
                    Skill
                  </p>
                </Link>
              </li>
              <li className="nav__menu relative inline-block">
                <Link
                  to="portfolio" 
                  activeClass="after:absolute after:h-[3px] after:left-0 after:right-0 after:m-auto after:top-10 after:bg-[#3e6ff4]" 
                  spy={true} smooth={true} offset={-83} duration={1000}
                  className="cursor-pointer hover:after:absolute hover:after:h-[3px] hover:after:left-0 hover:after:right-0 hover:after:m-auto hover:after:top-10 hover:after:bg-[#3e6ff4]"
                >
                  <p className="text-[#3e6ff4] text-[15px] font-semibold uppercase py-[10px] px-[15px]">
                    Portfolio
                  </p>
                </Link>
              </li>
              <li className="nav__menu relative inline-block">
                <Link
                  to="contact" 
                  activeClass="after:absolute after:h-[3px] after:left-0 after:right-0 after:m-auto after:top-10 after:bg-[#3e6ff4]"
                  spy={true} smooth={true} offset={-83} duration={1000}
                  className="cursor-pointer hover:after:absolute hover:after:h-[3px] hover:after:left-0 hover:after:right-0 hover:after:m-auto hover:after:top-10 hover:after:bg-[#3e6ff4]"
                >
                  <p className="text-[#3e6ff4] text-[15px] font-semibold uppercase py-[10px] px-[15px]">
                    Contact
                  </p>
                </Link>
              </li>
            </ul>

            <div
              onClick={() => setTheme(colorTheme)}
              className="toggle my-1 ml-2 h-5 w-5"
            >
              {colorTheme === "light" ? (
                <i className="bx bx-sun text-2xl text-[#3e6ff4] cursor-pointer" />
              ) : (
                <i className="bx bx-moon text-2xl text-[#3e6ff4] cursor-pointer" />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
