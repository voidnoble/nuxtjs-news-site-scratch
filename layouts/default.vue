<template>
  <div>
    <!-- Google Tag Manager -->
    <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-P5ZZW2" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <script type="text/javascript">
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-P5ZZW2');
    </script>
    <!-- /Google Tag Manager -->
    <div style="display:none;" id="customOverlay"></div>

    <nuxt />

    <p class="btn-mobile__wrapper" style="display:none;text-align:center;margin-top:10px;margin-bottom:10px;">
      <a href="http://m.yourdomain.com/?mobile">
        <img :src="staticDomain +'/web2/images/btn/mobile_ver.png'" />
      </a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      staticDomain: process.env.staticDomain,
      apiDomain: process.env.apiDomain,
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.title +' Web' },
        { hid: 'og_type', property: 'og:type', content: 'article' },
        { hid: 'og_title', property: 'og:title', content: this.title },
        { hid: 'og_description', property: 'og:description', content: this.title +' Web' },
        { hid: 'og_image', property: 'og:image', content: '' },
        { hid: "twitter_title", name: "twitter:title", content: this.title },
        { hid: "twitter_image", name: "twitter:image", content: "" },
        { hid: "twitter_description", name: "twitter:description", content: " Web" },
      ],
      link: [
        { hid: '_css', rel: "stylesheet", href: this.staticDomain +"/web2/css/.css?v=2018022801", title: " Stylesheet", type: "text/css", media: "all", charset: "utf-8" },
        { hid: '_print_css', rel: "stylesheet", href: this.staticDomain +"/web2/css/print.css", title: " Print Stylesheet", type: "text/css", media: "print", charset: "utf-8" },
      ],
      script: [
        { hid: 'jquery_slides_plugin', type: "text/javascript", src: this.staticDomain +"/web2/js/slides.jquery.js", charset: "utf-8" },
        { hid: '_design_script', type: "text/javascript", src: this.staticDomain +"/web2/js/design.js", charset: "utf-8" },
        { hid: '_common_script', type: "text/javascript", src: this.staticDomain +"/web2/js/common.js", charset: "utf-8" },
        { hid: '_business_script', type: "text/javascript", src: this.staticDomain +"/web2/js/business.js", charset: "utf-8" },
        { hid: 'postscribe_script', type: "text/javascript", src: this.staticDomain +"/web2/js/postscribe.min.js?v=1.4.0" },
        {
          hid: 'footer_script',
          innerHTML: `$(function () {
              // When user from mobile site then show the mobile link button.
              if (getCookie("mobile")) $('.btn-mobile__wrapper').show();

              // GNB Current highlight
              var locationPathname = location.pathname.replace(/\\?.*$/, '');
              if (locationPathname != '/') {
                  var locationPaths = locationPathname.split('/');

                  // Highlight current GNB item
                  var $currentNavLink = $('.gnb > li > a[href="' + locationPathname + '"]');
                  if (typeof $currentNavLink == 'undefined' || $currentNavLink.length == 0) {
                      $currentNavLink = $('.gnb > li > a[href$="/' + locationPaths[1] + '"]');
                  }
                  $currentNavLink.addClass('current');
                  var $currentNavImg = $currentNavLink.find('img');
                  if (typeof $currentNavImg != 'undefined' && $currentNavImg.length > 0) {
                      $currentNavImg.attr('src', $currentNavImg.attr('src').replace('_off', '_on'));
                  }
                  $currentNavLink.parents('ul').die('mouseleave');

                  // Highlight GNB sub navigation
                  if (locationPaths.length > 2) {
                      var $currentSubNav = $currentNavLink.next('ul');
                      if (typeof $currentSubNav != 'undefined' && $currentSubNav.length > 0) {
                          $currentSubNav.css('display', 'block');
                          var $currentSubNavLink = $currentSubNav.find('a[href$="/' + locationPaths[2] + '"]');
                          $currentSubNavLink.addClass('current');
                          var $currentSubNavImg = $currentSubNavLink.find('img');
                          if (typeof $currentSubNavImg != 'undefined' && $currentSubNavImg.length > 0) {
                              $currentSubNavImg.attr('src', $currentSubNavImg.attr('src').replace('_off', '_on'));
                          }
                      }
                  }
              }

              // DFP not consistently display so refresh
              googletag.cmd.push(function () {
                  googletag.pubads().refresh();
              });
              //googletag.pubads().refresh();

              $('#bannerArea1, #bannerArea2').slides({
                  preload: false,
                  preloadImage: '{{ staticDomain }}/web2/images/common/loading.gif',
                  play: 0,
                  pause: 2500,
                  generatePagination: true,
                  generateNextPrev: false,
                  hoverPause: true
              });
          });

          if (getCookie('user_id')) {
              if (getCookie('user_email') == '' || getCookie('user_email') == null) {
                  $(function () {
                      showUsrModifyView({ 'queryStr': 'defaultFocusInputOnModifyForm=email' });
                      alert("연락용 이메일을 입력해주세요.");
                  });
              }
          }`,
          body: true
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        footer_script: ['innerHTML']
      }
    }
  }
}
</script>

<style>
</style>