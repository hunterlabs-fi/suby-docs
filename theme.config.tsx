import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: (
    <>
      <img
        style={{ height: "50px" }}
        alt="Suby.fi Logo"
        src="https://staging.suby.fi/logos/suby-transparent-blue-medium.png"
      />{" "}
      Docs
    </>
  ),
  project: {
    link: "https://github.com/hunterlabs-fi/suby-docs",
  },
  docsRepositoryBase: "https://github.com/hunterlabs-fi/suby-docs",
  footer: {
    content: "Built by Hunter Labs.",
  },
  head: function Head() {
    const { asPath } = useRouter();
    const config = useConfig();

    const pageTitle = config.frontMatter.title || config.title;

    const siteTitle = "Suby.fi Docs";
    const title = pageTitle ? `${pageTitle} - ${siteTitle}` : siteTitle;

    const url = `https://docs.suby.fi${asPath}`;
    const description = config.frontMatter.description || "";

    return (
      <>
        <title>{title}</title>
        <meta name="robots" content="index,follow" />
        <meta name="description" content={description} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        {/* <meta property="og:image" content="" /> */}
        {/* <meta property="og:locale" content="en_US" /> */}

        <link rel="canonical" href="https://docs.suby.fi" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </>
    );
  },
};

export default config;
