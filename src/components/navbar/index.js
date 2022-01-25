import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { animated, config, useSpring } from "react-spring";
import { getLinkTo } from "../../functions/utils/vanilla-utils";
import Container from "../ui/container";
import P from "../ui/typography/p";
import SmartButton from "../smart-button/index";
import Row from "../ui/row";
import pageBlockDataDefault from "./page-block-default.json";
import ButtonsArray from "../buttons-array";
import * as R from "ramda";
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

  const pathname = isServer ? "/" : R.prop("pathname", location);

  const baseUrl = absoluteUrl ? clientBaseUrl : "";

  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    setNavbarOpen(false);
  }, [pathname]);

  const springProps = useSpring({
    config: config.default,
    from: { width: "0%" },
    to: { width: navbarOpen ? "100%" : "0%" },
  });

  return (
    <section className={containerClasses}>
      <Container>
        <Row className="justify-between xl:py-0 h-70px min-h-full @ani items-stretch">
          <Link href={`${baseUrl}/`} passHref>
            <a className="flex items-center">
              <img
                src="/assets/images/logo-2.0.svg"
                className="object-contain w-100px h-21px"
              />
            </a>
          </Link>
          <div className="flex-row hidden justify-center lg:flex w-fit relative items-center">
            {links && !R.isEmpty(links)
              ? links.map(({ linkTo, linkTitle }, index) => {
                  const isActive = router.pathname.includes(linkTo);
                  return (
                    <Link
                      key={index}
                      href={getLinkTo({ baseUrl, linkTo })}
                      passHref
                    >
                      <a className="h-full mx-4">
                        <div className="px-1 relative flex flex-col relative h-full items-center justify-center group">
                          <SmartButton variant="text">
                            <div className="flex items-center">
                              <P
                                variant="button"
                                className="@ftf font-family-rubik-medium"
                              >
                                {linkTitle}
                              </P>
                            </div>
                          </SmartButton>
                          <NavbarUnderline active={isActive} />
                        </div>
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
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="focus:outline-none lg:hidden"
          >
            <AllIcons name="DnD" className="w-8 h-8" />
          </button>
        </Row>
      </Container>
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
          {links && !R.isEmpty(links)
            ? links.map(({ linkTo, linkTitle }, index) => {
                const isActive = router.pathname.includes(linkTo);

                return (
                  <SmartButton
                    key={index}
                    className={`relative @ftf font-family-rubik-medium  @fts text-24px @leh leading-26px ${
                      isActive ? "@ttc text-blue-base" : ""
                    }`}
                    href={getLinkTo({ baseUrl, linkTo })}
                    variant="text"
                  >
                    {linkTitle}
                  </SmartButton>
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
    </section>
  );
};

export default Navbar;

const baseContainerClasses = `w-full bg-white relative lg:fixed left-0 right-0 top-50px sm:top-40px z-60 overflow-y-hidden border-gray-light border-b-px `;

// const CloseButton = ({ setOpen, open }) => {
//   return (
//     <div className="flex items-center justify-center lg:hidden">
//       <button
//         onClick={() => setOpen(!open)}
//         className={`button cursor-pointer focus:outline-none inline-block order-3 outline-none text-gold-lite z-50 ${
//           open && "change"
//         }`}
//       >
//         <div className="bar1 bg-blue-dark mx-auto" />
//         <div className="invis" />
//         <div className="bar3 bg-blue-dark mx-auto" />
//       </button>
//     </div>
//   );
// };
