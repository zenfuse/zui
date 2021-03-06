import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { animated, config, useSpring } from "react-spring";
import { getLinkTo, getSrc } from "../../functions/utils/vanilla-utils";
import Container from "../ui/container";
import P from "../ui/typography/p";
import Row from "../ui/row";
import pageBlockDataDefault from "./page-block-default.json";
import ButtonsArray from "../buttons-array";
import NavbarUnderline from "./navbar-underline";
import AllIcons from "../ui/all-icons";

const isServer = typeof window === "undefined";

const clientBaseUrl =
  process.env.NEXT_PUBLIC_CLIENT_BASE_URL || "https://zenfuse.io";

const Navbar = ({
  pageBlockData,
  absoluteUrl = false,
  containerClasses = baseContainerClasses,
  query = "",
}) => {
  const router = useRouter();

  const { links, buttonsArray } = pageBlockData || pageBlockDataDefault;

  const pathname = isServer ? "/" : location?.pathname;

  const baseUrl = absoluteUrl ? clientBaseUrl : "";

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setNavbarOpen(false);
  }, [pathname]);

  const springProps = useSpring({
    config: config.default,
    from: { width: "0%" },
    to: { width: navbarOpen ? "100%" : "0%" },
  });

  useEffect(() => {
    function checkIsDesktop() {
      setIsDesktop(window.innerWidth > 1024);
    }
    window.addEventListener(`resize`, checkIsDesktop);
    checkIsDesktop();

    return () => window.removeEventListener(`resize`, checkIsDesktop);
  }, []);

  return (
    <section className={containerClasses}>
      <Container>
        <Row className="justify-between xl:py-0 h-70px min-h-full @ani items-stretch">
          <Link href={`${baseUrl}/`} passHref>
            <a className="flex items-center">
              <img
                alt="Zenfuse logo"
                src="/assets/images/logo-2.0.svg"
                className="object-contain w-100px h-21px"
              />
            </a>
          </Link>
          {isDesktop ? (
            <>
              <div className="hidden justify-center lg:flex w-fit gap-10 relative items-center">
                {links?.length
                  ? links.map(({ linkTo, linkTitle, linkIcon }, index) => {
                      const isActive = router.pathname.includes(linkTo);

                      return (
                        <Link
                          key={index}
                          href={getLinkTo({ baseUrl, linkTo })}
                          passHref
                        >
                          <a className="group h-full px-1 flex items-center justify-center gap-2 focus:outline-none relative">
                            {linkIcon && (
                              <img
                                className="w-4 h-4 object-contain"
                                src={getSrc(linkIcon)}
                              />
                            )}
                            <P
                              variant="button"
                              className="@ftf font-family-rubik-medium"
                            >
                              {linkTitle}
                            </P>
                            <NavbarUnderline active={isActive} />
                          </a>
                        </Link>
                      );
                    })
                  : null}
              </div>
              <ButtonsArray
                containerClasses="@dy hidden @ani items-center @wh w-auto lg:flex"
                query={query}
                buttonsArray={buttonsArray}
              />
            </>
          ) : (
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="focus:outline-none lg:hidden"
            >
              <AllIcons name="BurgerThin" className="w-5 h-5" />
            </button>
          )}
        </Row>
      </Container>
      {!isDesktop && (
        <animated.div
          style={springProps}
          className="shadow-lg h-screen overflow-hidden bg-white right-0 z-70 top-0 bottom-0 fixed flex flex-col items-center justify-center"
        >
          <button
            onClick={() => setNavbarOpen(false)}
            className="absolute right-6 top-16 focus:outline-none"
          >
            <AllIcons name="Close" className="w-8 h-8 text-black" />
          </button>
          <div className="w-300px grid grid-cols-1 grid-flow-row gap-6 mb-8 ">
            {links?.length
              ? links.map(({ linkTo, linkTitle }, index) => {
                  const isActive = router.pathname.includes(linkTo);

                  return (
                    <Link
                      key={index}
                      href={getLinkTo({ baseUrl, linkTo })}
                      passHref
                    >
                      <a
                        className={`relative font-family-rubik-medium text-24px leading-26px w-fit mx-auto focus:outline-none ${
                          isActive ? "text-blue-base" : ""
                        }`}
                      >
                        {linkTitle}
                      </a>
                    </Link>
                  );
                })
              : null}
          </div>
          <ButtonsArray
            containerClasses="@dy grid grid-cols-1 justify-items-center"
            query={query}
            buttonsArray={buttonsArray}
          />
        </animated.div>
      )}
    </section>
  );
};

export default Navbar;

const baseContainerClasses = `w-full bg-white relative lg:fixed left-0 right-0 top-50px sm:top-40px z-60 overflow-y-hidden border-gray-light border-b-px `;
