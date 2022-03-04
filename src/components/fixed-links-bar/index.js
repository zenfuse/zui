import { useEffect, useState, useRef } from "react";
import useWindowDimensions from "../../functions/hooks/use-window-dimensions";
import useDetectOutsideClick from "../../functions/hooks/use-detect-outsideclick";
import { getSrc } from "../../functions/utils/vanilla-utils";
import ExchangeItem from "./exchange-item";
import PairLink from "./pair-link";
import { animated, useSpring, a, config } from "react-spring";
import { useDrag } from "react-use-gesture";
import Section from "../ui/section";
import Container from "../ui/container";
import Row from "../ui/row";
import Marquee from "react-fast-marquee";
import ModalArrow from "./modal-arrow";
import DesktopExchangesBar from "./desktop-exchanges-bar";

const FixedLinksBar = ({ pageBlockData }) => {
  const { exchanges } = pageBlockData || pageBlockDataDefault;

  const { width: screenWidth } = useWindowDimensions();

  const menuRef = useRef();
  const tokensContainerRef = useRef();

  const [menuOpen, setMenuOpen] = useDetectOutsideClick(menuRef, false);
  const [menuVisible, setMenuVisible] = useState(false);

  const sliderAnimation = useSpring({
    opacity: menuOpen ? `0` : `1`,
    height: menuOpen ? `0` : `18px`,
    visibility: menuOpen ? `visible` : `invisible`,
    config: {
      duration: 200,
    },
  });

  const tokenItemsAnimation = useSpring({
    opacity: menuVisible ? `1` : `0`,
    config: {
      duration: 200,
    },
  });

  const height = tokensContainerRef?.current?.clientHeight;

  const [{ y }, api] = useSpring(() => ({ y: height || 0 }));

  const handleMenuOpen = (bool) => {
    setMenuOpen(bool);
    setMenuVisible(bool);
  };

  const open = ({ canceled }) => {
    document.querySelector(`body`).style.overflow = `hidden`;
    api.start({
      y: height,
      immediate: false,
      config: canceled ? config.wobbly : config.stiff,
    });

    handleMenuOpen(true);
  };

  const close = (velocity = 0) => {
    document.querySelector(`body`).style.overflow = `auto`;
    api.start({
      y: 0,
      immediate: false,
    });
    handleMenuOpen(false);
  };

  const bind = useDrag(
    ({ last, vxvy: [, vy], movement: [, my], cancel, canceled, velocity }) => {
      if (my > height * 1.2) cancel();

      if (last) {
        if (my < height * 0.1 && !menuOpen) {
          close(my);
        } else if (menuOpen && my > height * 0.1) {
          close(my);
        } else {
          open({ canceled });
        }
      } else if (my > 0) {
        api.start({ y: my, immediate: true });
        setMenuVisible(my > 150);
      }
    },
    {
      initial: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    }
  );

  useEffect(() => {
    const pageClickEvent = (e) =>
      menuOpen && !menuRef?.current.contains(e.target) ? close() : null;

    window.addEventListener(`click`, pageClickEvent);

    return () => window.removeEventListener(`click`, pageClickEvent);
  }, [menuOpen]);

  return (
    <>
      {screenWidth < 500 ? (
        <>
          <a.div
            ref={menuRef}
            className="w-screen bg-transparent fixed overflow-hidden"
            {...bind()}
            onClick={open}
            style={{
              top: `calc(-100vh + 50px)`,
              y,
              touchAction: `none`,
              height: `100vh`,
              zIndex: `110`,
            }}
          >
            <div className="w-screen bg-blue-650 h-full text-white overflow-hidden">
              <Section className="h-full">
                <Container className="h-full">
                  <div
                    className={`relative w-full h-full flex flex-col justify-end items-end md:hidden ${
                      menuOpen ? `pb-8px` : `pb-4px`
                    }`}
                  >
                    <animated.div
                      style={tokenItemsAnimation}
                      className="w-fill flex flex-col items-start relative"
                    >
                      <Row className="w-full">
                        <div
                          className="w-full h-full pb-4"
                          ref={tokensContainerRef}
                        >
                          <span className="font-family-rubik-medium text-16px leading-20px mb-4">
                            Trade ZEFU tokens on:
                          </span>
                          {exchanges?.length ? (
                            <div className="w-fill flex flex-col max-h-400px sm:max-h-300px gap-2 mt-2">
                              {exchanges.map((item, index) => (
                                <div
                                  key={index}
                                  className="flex flex-col w-full"
                                >
                                  <ExchangeItem
                                    title={item.title}
                                    iconClasses={``}
                                    icon={getSrc(item.icon)}
                                  />
                                  <div className="flex my-1 flex-wrap gap-2">
                                    {item?.pairs && item?.pairs?.length
                                      ? item.pairs.map((pair, index) => (
                                          <PairLink
                                            key={index}
                                            linkClasses={``}
                                            linkTitle={pair.linkTitle}
                                            linkTo={pair.linkTo}
                                            icon={getSrc(pair.icon)}
                                          />
                                        ))
                                      : null}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </Row>
                    </animated.div>
                    <animated.div
                      style={sliderAnimation}
                      className="flex w-full bottom-0 overflow-hidden mb-2 pointer-events-none z-20 overflow-x-scroll"
                    >
                      <Marquee gradient={false} speed={30}>
                        {exchanges?.length
                          ? exchanges.map((item, index) => (
                              <div
                                key={index}
                                className="mx-3 flex items-center justify-center w-1/3"
                              >
                                <ExchangeItem
                                  title={item.title || null}
                                  iconClasses={``}
                                  icon={getSrc(item.icon)}
                                />
                              </div>
                            ))
                          : null}
                      </Marquee>
                    </animated.div>
                    <div className="w-full flex justify-center">
                      <ModalArrow open={menuOpen} />
                    </div>
                  </div>
                </Container>
              </Section>
            </div>
          </a.div>
          {menuOpen ? (
            <a.div
              style={{ zIndex: `100` }}
              className="top-0 w-full fixed bottom-0 bg-black bg-opacity-40 overflow-hidden"
              {...bind()}
            />
          ) : null}
        </>
      ) : (
        <DesktopExchangesBar exchanges={exchanges} />
      )}
    </>
  );
};

export default FixedLinksBar;

const pageBlockDataDefault = {
  exchanges: [
    {
      id: 1,
      title: `Uniswap`,
      pairs: [
        {
          id: 2,
          linkTo: `https://info.uniswap.org/home#/tokens/0xb1e9157c2fdcc5a856c8da8b2d89b6c32b3c1229`,
          linkTitle: `ZEFU/ETH`,
          linkProps: [],
          icon: {
            id: 31,
            alt: null,
            full: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/eth_zefu_c3e0ea93c7.svg`,
            small: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/eth_zefu_c3e0ea93c7.svg`,
            medium: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/eth_zefu_c3e0ea93c7.svg`,
            thumbnail: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/eth_zefu_c3e0ea93c7.svg`,
          },
        },
      ],
      icon: {
        id: 200,
        alt: null,
        full: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/uniswap_1f521fe1eb.svg`,
        small: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/uniswap_1f521fe1eb.svg`,
        medium: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/uniswap_1f521fe1eb.svg`,
        thumbnail: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/uniswap_1f521fe1eb.svg`,
      },
    },
    {
      id: 3,
      title: `BITGLOBAL`,
      pairs: [
        {
          id: 8,
          linkTo: `https://www.bithumb.pro/en-us/spot/trade?q=ZEFU-USDT`,
          linkTitle: `ZEFU/USDT`,
          linkProps: [],
          icon: {
            id: 33,
            alt: null,
            full: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/usdt_zefu_c83fd14522.svg`,
            small: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/usdt_zefu_c83fd14522.svg`,
            medium: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/usdt_zefu_c83fd14522.svg`,
            thumbnail: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/usdt_zefu_c83fd14522.svg`,
          },
        },
        {
          id: 9,
          linkTo: `https://www.bithumb.pro/en-us/spot/trade?q=ZEFU-ETH`,
          linkTitle: `ZEFU/ETH`,
          linkProps: [],
          icon: {
            id: 31,
            alt: null,
            full: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/eth_zefu_c3e0ea93c7.svg`,
            small: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/eth_zefu_c3e0ea93c7.svg`,
            medium: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/eth_zefu_c3e0ea93c7.svg`,
            thumbnail: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/eth_zefu_c3e0ea93c7.svg`,
          },
        },
        {
          id: 10,
          linkTo: `https://www.bithumb.pro/en-us/spot/trade?q=ZEFU-BTC`,
          linkTitle: `ZEFU/BTC`,
          linkProps: [],
          icon: {
            id: 71,
            alt: null,
            full: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/btc_853368de1a.svg`,
            small: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/btc_853368de1a.svg`,
            medium: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/btc_853368de1a.svg`,
            thumbnail: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/btc_853368de1a.svg`,
          },
        },
      ],
      icon: {
        id: 237,
        alt: null,
        full: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/bitglobal_icon_59d86ad6fb.svg`,
        small: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/bitglobal_icon_59d86ad6fb.svg`,
        medium: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/bitglobal_icon_59d86ad6fb.svg`,
        thumbnail: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/bitglobal_icon_59d86ad6fb.svg`,
      },
    },
    {
      id: 4,
      title: `Bibox`,
      pairs: [
        {
          id: 11,
          linkTo: `https://www.bibox.pro/en/exchange/basic/ZEFU_USDT`,
          linkTitle: `ZEFU/USDT`,
          linkProps: [],
          icon: {
            id: 33,
            alt: null,
            full: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/usdt_zefu_c83fd14522.svg`,
            small: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/usdt_zefu_c83fd14522.svg`,
            medium: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/usdt_zefu_c83fd14522.svg`,
            thumbnail: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/usdt_zefu_c83fd14522.svg`,
          },
        },
        {
          id: 12,
          linkTo: `https://www.bibox.pro/en/exchange/basic/ZEFU_ETH`,
          linkTitle: `ZEFU/ETH`,
          linkProps: [],
          icon: {
            id: 31,
            alt: null,
            full: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/eth_zefu_c3e0ea93c7.svg`,
            small: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/eth_zefu_c3e0ea93c7.svg`,
            medium: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/eth_zefu_c3e0ea93c7.svg`,
            thumbnail: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/eth_zefu_c3e0ea93c7.svg`,
          },
        },
      ],
      icon: {
        id: 32,
        alt: null,
        full: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/bibox_8f475b0936.svg`,
        small: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/bibox_8f475b0936.svg`,
        medium: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/bibox_8f475b0936.svg`,
        thumbnail: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/bibox_8f475b0936.svg`,
      },
    },
    {
      id: 5,
      title: `PancakeSwap`,
      pairs: [
        {
          id: 28,
          linkTo: `https://pancakeswap.info/token/0x23ec58e45ac5313bcb6681f4f7827b8a8453ac45`,
          linkTitle: `ZEFU/BNB`,
          linkProps: [
            {
              id: 26,
              name: `target`,
              value: `_blank`,
            },
          ],
          icon: {
            id: 133,
            alt: null,
            full: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/bnb_4c9ccaf9e0.png`,
            small: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/bnb_4c9ccaf9e0.png`,
            medium: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/bnb_4c9ccaf9e0.png`,
            thumbnail: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/bnb_4c9ccaf9e0.png`,
          },
        },
      ],
      icon: {
        id: 244,
        alt: null,
        full: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/pancake_674b89a47e.svg`,
        small: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/pancake_674b89a47e.svg`,
        medium: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/pancake_674b89a47e.svg`,
        thumbnail: `https://zfblob1.blob.core.windows.net/zfblob1container1/website/pancake_674b89a47e.svg`,
      },
    },
  ],
};
