import { Helmet } from "react-helmet";
import React from "react";
import { useLocation } from "@reach/router";
import useSiteMetadata from "../../helpers/useSiteMetadata";

type SEOProps = {
    title?: string,
    description?: string,
    seoTitle?: string,
    socialDescription?: string,
    image?: string,
    type?: string
}

const SEO = (props: React.PropsWithChildren<SEOProps>) => {
    const siteMeta = useSiteMetadata();
    const location = useLocation();

    let url = siteMeta.siteUrl + location.pathname;

    let doTemplatedTitle = true;

    let siteName = siteMeta.title;

    let title = props.title;
    let seoTitle = props.seoTitle || title;
    let description = props.description || siteName;
    let image = props.image;
    let type = props.type || "website";

    let siteTwitter = null;
    let authorTwitter = null;

    if(!props.title) {
        doTemplatedTitle = false;
        title = siteName;
    }

    return <Helmet title={title} titleTemplate={doTemplatedTitle ? "%s | "+siteName : undefined}>
        <meta name="description" content={description}/>

        <meta property="og:url"             content={url} />
        <meta property="og:type"            content={type} />
        <meta property="og:title"           content={seoTitle} />
        <meta property="og:site_name"       content={siteName} />
        <meta property="og:description"     content={description} />
        {image && <meta property="og:image" content={image} />}

        <meta name="twitter:card"           content="summary_large_image" />
        {siteTwitter &&   <meta name="twitter:site"           content={siteTwitter} />}
        {authorTwitter && <meta name="twitter:creator"        content={authorTwitter} />}

        {props.children}
    </Helmet>
}

export default SEO;