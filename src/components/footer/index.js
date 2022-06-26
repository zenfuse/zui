import React, { Fragment } from "react";
import Container from "../ui/container";
import Row from "../ui/row";
import FooterColumn from "./footer-column";
import FooterMenuLink from "./footer-menu-link";
import FooterMenuTitle from "./footer-menu-title";
import SmartButton from "../smart-button";
import { getSrc } from "../../functions/utils/vanilla-utils";

const clientBaseUrl =
  process.env.NEXT_PUBLIC_CLIENT_BASE_URL || "https://zenfuse.io";

const Footer = ({ pageBlockData, absoluteUrl = false }) => {
  const { columns, bottomLinks, copyrigths, socialLinks } =
    pageBlockData || pageBlockDataDefault;

  const baseUrl = absoluteUrl ? clientBaseUrl : "";

  return (
    <section className="bg-white overflow-hidden relative w-full">
      <Container>
        <Row>
          <div className="flex grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-6 grid-flow-row pb-6 pt-12 relative w-full">
            {columns?.length &&
              columns.map((item, index) => (
                <FooterColumn {...item} baseUrl={baseUrl} key={index} />
              ))}
            <div className="flex flex-col col-span-2">
              <FooterMenuTitle title="Social" />
              {socialLinks?.length && (
                <div className="w-full flex items-start mt-5 gap-4">
                  {socialLinks.map((socialLink, index) => (
                    <SmartButton
                      key={index}
                      className="@fx flex @ani items-center @jyc justify-center @wh w-5 @ht h-5 @fxs -0 @oy opacity-40 hover:opacity-100 @tndn duration-200"
                      href={socialLink?.linkTo || "/"}
                      linkProps={socialLink?.linkProps}
                    >
                      <img
                        src={getSrc(socialLink.icon)}
                        className="w-full h-full"
                      />
                    </SmartButton>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 content-center sm:justify-items-center pb-3 pt-6 relative w-full">
            <img src="/assets/images/logo-2.0.svg" className="w-100px mb-4" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center text-center w-full">
              {bottomLinks?.length &&
                bottomLinks.map((item, index) => (
                  <Fragment key={index}>
                    <FooterMenuLink
                      {...item}
                      baseUrl={baseUrl}
                      className="text-true-gray-800 @fts hover:text-black duration-200 py-1 sm:py-0"
                    />
                  </Fragment>
                ))}
            </div>
            <FooterMenuLink linkTitle={copyrigths} />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;

const pageBlockDataDefault = {
  columns: [
    {
      title: "Company",
      links: [
        { linkTitle: "About us", linkTo: "/about-us" },
        { linkTitle: "Partners", linkTo: "/partners" },
        { linkTitle: "Token", linkTo: "/token" },
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
      title: "Communities",
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
    { linkTitle: "Terms of Use", linkTo: "/terms-of-use" },
    { linkTitle: "Privacy Policy", linkTo: "/privacy-policy" },
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
