module.exports = {
  env: {
    staticDomain: process.env.STATIC_DOMAIN || 'http://file.yourdomain.com',
    apiDomain: process.env.API_DOMAIN || 'http://localhost:3800',
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ko'
    },
    title: 'News Site Scratch',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { hid: 'keywords', name: 'keywords', content: '' },
      { hid: 'fb_app_id', property: 'fb:app_id', content: '788590401193786' },
      { hid: 'og_article_author', property: 'og:article:author', content: '' },
      { hid: "twitter_card", name: "twitter:card", content: "summary_large_image" },
      { hid: "twitter_site", name: "twitter:site", content: "" },
      { hid: "twitter_creator", name: "twitter:creator", content: "" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { hid: 'jquery_script', src: "https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" },
      { hid: 'jquery_ui_script', type: "text/javascript", src: "https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js", charset: "utf-8" },
      {
        hid: 'googletag_script', 
        innerHTML: `var googletag = googletag || {};
        googletag.cmd = googletag.cmd || [];
        (function () {
            var gads = document.createElement('script');
            gads.async = true;
            gads.type = 'text/javascript';
            var useSSL = 'https:' == document.location.protocol;
            gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(gads, node);
        })();

        googletag.cmd.push(function () {
            googletag.defineSlot('/85915087/XXX_FullSite_RightSidebar', [269, 23], 'div-gpt-ad-1448122586601-1').addService(googletag.pubads());
            googletag.defineSlot('/85915087/XXX_FullSite_RightSidebar2', [269, 23], 'div-gpt-ad-1448122586601-2').addService(googletag.pubads());
            googletag.defineSlot('/85915087/XXX_NewsDetail_Under_Byline', [670, 21], 'div-gpt-ad-1448122586602-1').addService(googletag.pubads());
            //googletag.defineSlot('/85915087/XXX_NewsDetail_Under_Byline2', [670, 21], 'div-gpt-ad-1448122586602-2').addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
        });

        var externSiteLoginStartUrls = { "twitter": "/lib/twitteroauth/index.php" };`,
        type: 'text/javascript'
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      googletag_script: ['innerHTML']
    }
  },
  plugins: [
    { src: '~plugins/ga.js', ssr: false },
    { src: '~plugins/helper.js', ssr: false },
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    // proxyHeaders: false
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
