import React from "react";
import Row from "../ui/row";
import FooterMenuLink from "./footer-menu-link";
import { getSrc } from "../../functions/utils/vanilla-utils";
import Link from "next/link";
import AllIcons from "../ui/all-icons";

const clientBaseUrl =
  process.env.NEXT_PUBLIC_CLIENT_BASE_URL || "https://zenfuse.io";

const Footer = ({ pageBlockData, absoluteUrl = false, containerClasses }) => {
  const { columns, bottomLinks, copyrigths, socialLinks } =
    pageBlockData || pageBlockDataDefault;

  const baseUrl = absoluteUrl ? clientBaseUrl : "";

  return (
    <section
      className={`bg-white dark:bg-true-gray-950 overflow-hidden relative w-full py-12 ${containerClasses}`}
    >
      <div className="mx-auto overflow-visible relative max-w-[1440px]">
        <Row className="@fxw @dy flex flex-col-reverse lg:grid lg:grid-cols-7 gap-8 sm:gap-6 justify-between @ani items-start">
          <div className="flex flex-col lg:col-span-2 gap-4">
            <div className="flex gap-3">
              <AllIcons name="CircleLogo" className="w-7" />
              <AllIcons
                name="ZenfuseTitle"
                className="w-24 text-black dark:text-white -translate-y-px"
              />
            </div>
            <p className="font-family-rubik text-14px leading-20px text-true-gray-450">
              Transforming сryptocurreny trading
            </p>
            {socialLinks?.length ? (
              <div className="w-full flex items-start gap-4">
                {socialLinks.map((socialLink, index) => (
                  <Link key={index} href={socialLink?.linkTo || "/"} passHref>
                    <a
                      target="_blank"
                      className="flex items-center justify-center w-5 h-5 opacity-40 hover:opacity-100 duration-100"
                    >
                      {socialLink?.icon && (
                        <img
                          src={getSrc(socialLink.icon)}
                          className="w-full h-full"
                        />
                      )}
                    </a>
                  </Link>
                ))}
              </div>
            ) : null}
            {copyrigths && (
              <p className="font-family-rubik text-14px leading-20px text-true-gray-450">
                {copyrigths}
              </p>
            )}
            {bottomLinks?.length ? (
              <div className="flex gap-3">
                {bottomLinks.map((item, index) => (
                  <FooterMenuLink {...item} key={index} baseUrl={baseUrl} />
                ))}
              </div>
            ) : null}
          </div>
          {columns?.length ? (
            <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-6 grid-flow-row relative lg:col-span-5">
              {columns.map((item, index) => (
                <div key={index} className="flex flex-col">
                  {item?.title && (
                    <h4 className="font-family-rubik-medium text-black dark:text-white text-16px leading-20px">
                      {item.title}
                    </h4>
                  )}
                  {item?.links?.length ? (
                    <div className="w-full flex flex-col gap-2 mt-5">
                      {item?.links.map((item, index) => (
                        <FooterMenuLink
                          {...item}
                          baseUrl={baseUrl}
                          key={index}
                        />
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </Row>
      </div>
    </section>
  );
};

export default Footer;

const pageBlockDataDefault = {
  columns: [
    {
      title: "Platform",
      links: [
        { linkTitle: "Profile", linkTo: "https://app.zenfuse.io" },
        { linkTitle: "Overview", linkTo: "https://app.zenfuse.io/overview" },
        { linkTitle: "Trading", linkTo: "https://app.zenfuse.io/trading" },
        { linkTitle: "Panic sell", linkTo: "https://app.zenfuse.io/panic-sell" },
      ],
    },
    {
      title: "Company",
      links: [
        { linkTitle: "Home", linkTo: "/about-us" },
        { linkTitle: "About us", linkTo: "/partners" },
        { linkTitle: "Bridge", linkTo: "/token" },
        { linkTitle: "Token", linkTo: "/token" },
        { linkTitle: "Meta", linkTo: "/token" },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          linkTitle: "CoinMarketCap",
          linkTo: "https://coinmarketcap.com/currencies/zenfuse/",
        },
        {
          linkTitle: "CoinGecko",
          linkTo: "https://www.coingecko.com/en/coins/zenfuse",
        },
        {
          linkTitle: "Xangle",
          linkTo: "https://xangle.io/project/ZEFU/key-info",
        },
        {
          linkTitle: "Dextools (ETH)",
          linkTo:
            "https://www.dextools.io/app/ether/pair-explorer/0x3e327a672734310d08f42da393bb1e386bbf28b7",
        },
        {
          linkTitle: "Dextools (BSC)",
          linkTo:
            "https://www.dextools.io/app/bsc/pair-explorer/0x49610316adce894f11cc915455e6ad7bc94c7930",
        },
      ],
    },
    {
      title: "Our communities",
      links: [
        {
          linkTitle: "English",
          linkTo: "https://t.me/zenfuse_en",
          linkProps: [
            {
              name: "target",
              value: "_blank",
            },
          ],
        },
        {
          linkTitle: "Russian",
          linkTo: "https://t.me/zenfuse_ru",
          linkProps: [
            {
              name: "target",
              value: "_blank",
            },
          ],
        },
        {
          linkTitle: "Bangladesh",
          linkTo: "https://t.me/zenfuse_bd",
          linkProps: [
            {
              name: "target",
              value: "_blank",
            },
          ],
        },
        {
          linkTitle: "Español",
          linkTo: "https://t.me/ZenfuseES",
          linkProps: [
            {
              name: "target",
              value: "_blank",
            },
          ],
        },
      ],
    },
    {
      title: "Learn more",
      links: [
        {
          linkTitle: "Documentation",
          linkTo: "https://docs.zenfuse.io/whitepaper",
          linkProps: [
            {
              name: "target",
              value: "_blank",
            },
          ],
        },
        {
          linkTitle: "BSC Bridge",
          linkTo: "https://bridge.zenfuse.io",
          linkProps: [
            {
              name: "target",
              value: "_blank",
            },
          ],
        },
      ],
    },
  ],
  bottomLinks: [
    { linkTitle: "Privacy Policy", linkTo: "/privacy-policy" },
    { linkTitle: "Terms & Conditions", linkTo: "/terms-of-use" },
  ],
  copyrigths: "© 2022 Zenfuse.io | All rights reserved ",
  socialLinks: [
    {
      icon: "https://zfblob1.blob.core.windows.net/zfblob1container1/website/telegram_c676f4dc9e.svg",
      title: "Telegram | News",
      linkTo: "http://t.me/zenfuse",
      linkProps: [
        {
          name: "target",
          value: "_blank",
        },
      ],
    },
    {
      icon: "https://zfblob1.blob.core.windows.net/zfblob1container1/website/twitter_19140a0a5f.svg",
      title: "Twitter",
      linkTo: "https://twitter.com/zenfuse_io",
      linkProps: [
        {
          name: "target",
          value: "_blank",
        },
      ],
    },
    {
      icon: "https://zfblob1.blob.core.windows.net/zfblob1container1/website/medium_5494032499.svg",
      title: "Medium",
      linkTo: "https://zenfuse.medium.com",
      linkProps: [
        {
          name: "target",
          value: "_blank",
        },
      ],
    },
    {
      icon: "https://zfblob1.blob.core.windows.net/zfblob1container1/website/linked_In_e2dce8077a.svg",
      title: "LinkedIn",
      linkTo: "https://www.linkedin.com/company/zenfuse",
      linkProps: [
        {
          name: "target",
          value: "_blank",
        },
      ],
    },
    {
      icon: "https://zfblob1.blob.core.windows.net/zfblob1container1/website/reddit_2739d934a4.svg",
      title: "Reddit",
      linkTo: "https://www.reddit.com/r/zenfuse",
      linkProps: [
        {
          name: "target",
          value: "_blank",
        },
      ],
    },
    {
      icon: "https://zfblob1.blob.core.windows.net/zfblob1container1/website/reddit_2739d934a4.svg",
      title: "Reddit",
      linkTo: "https://www.reddit.com/r/zenfuse",
      linkProps: [
        {
          name: "target",
          value: "_blank",
        },
      ],
    },
  ],
};
