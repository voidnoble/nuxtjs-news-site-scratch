<template>
  <section class="container">
    <script type="text/javascript" v-html="gotoTabScript"></script>
    <script type="text/javascript" src="http://log.yourdomain.com/popular/realtime_news.js"></script>

    <top-banner />

    <div id="bg_wrapper">
      <div id="wrap">
        <!-- 배너: 2017 사진기자 공채 -->
        <a v-if="USE_RECRUIT_LINK_IN_LIVENEWS" href="/pages/recruit" style="position: absolute; top:110px; right:50%; margin-right:540px;"><img :src="staticDomain +'/web2/images/banner/banner-recruit-cameraman.jpg'" alt=" 2017 상반기 견습 사진기자 모집" width="150" border="0"></a>
        <!-- /배너: 2017 사진기자 공채 -->

        <!-- Header -->
        <header-top v-bind:static-domain="staticDomain" />
        <!-- Main Navigation -->
        <gnb v-bind:static-domain="staticDomain" />
        <!-- Main Navigation //-->
        <!-- Header //-->
        
        <div class="new_main">
          <div class="new_main_top">
            <div style="padding-top:25px;"></div>
            <no-ssr placeholder="Loading...">
              <main-top-news v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" />
            </no-ssr>
            <no-ssr placeholder="Loading...">
              <main-headline v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" />
            </no-ssr>
            <no-ssr placeholder="Loading...">
              <main-sports v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" />
            </no-ssr>
          </div><!-- //new_main_top -->
                
          <div style="clear:both;height:15px;"></div>

          <no-ssr placeholder="Loading...">
            <main-news v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" />
          </no-ssr>
        </div><!-- //new_main -->
        
        <!-- Live News -->
        <div class="liveNews">
          <h4><img :src="staticDomain +'/web2/images/common/h4_live_news1.gif'" alt="Live 실시간 속보" /></h4>
          <ul>
            <li style="width:620px;">
              <ul id="realtimenews_area" style="padding:0px;margin:0px;"></ul>
            </li>
            <li v-if="USE_RECRUIT_LINK_IN_LIVENEWS" style="width:225px;margin-right:10px;text-align:right;"><a href="/pages/recruit"><strong> 2017 상반기 견습 사진기자 공채</strong></a></li>
            <li v-if="USE_SALE_SCOUTING_NOTEBOOK_IN_LIVENEWS" style="width:210px;"><a href="http://event.yourdomain.com/sn2013/order" target="_blank"><strong>{{ new Date().getFullYear() }} 스카우팅 노트북 절찬리 판매중</strong></a></li>
          </ul>
        </div>
        <!-- Live News //-->
        
        <!-- Main Section1 -->
        <div class="mainSection1">
          <no-ssr placeholder="Loading...">
            <-focus v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" />
          </no-ssr>
          <no-ssr placeholder="Loading...">
            <main--hot v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" />
          </no-ssr>

          <table style="height: 300px;">
          <tr>
            <td width="26" style="width:26px;"></td>
            <td style="vertical-align: middle;">
              <!-- 광고:  메인 중단 우측 300x250 -->
              <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script>
              <ins class="adsbyadop" _adop_zon="1b75458d-bf99-4025-91ed-77e791cab4f5" _adop_type="re" style="display:inline-block;width:300px;height:250px;" _page_url=""></ins>
              <!-- /광고:  메인 중단 우측 300x250 -->
            </td>
          </tr>
          </table>
        </div>
        <!-- Main Section1 //-->
        
        <!-- Main Section2 -->
        <div class="mainSection2">
          <div class="leftSection">
            <no-ssr placeholder="Loading...">
              <main-video1 v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" />
            </no-ssr>
            <no-ssr placeholder="Loading...">
              <main-inside v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" />
            </no-ssr>
            <!-- 컨텐츠 모음 -->
            <div class="contentsPannel">
              <no-ssr placeholder="Loading...">
                <baseball-record v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" />
              </no-ssr>
              <no-ssr placeholder="Loading...">
                <talk-talk v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" />
              </no-ssr>
              <no-ssr placeholder="Loading...">
                <main-video2 v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" />
              </no-ssr>
            </div>
            <!-- 컨텐츠 모음 //-->
          </div>
          
          <div class="rightSection">
            <no-ssr placeholder="Loading...">
              <coffee v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" />
            </no-ssr>
            <no-ssr placeholder="Loading...">
              <desk-column v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" />
            </no-ssr>
            <no-ssr placeholder="Loading...">
              <main-issue v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" />
            </no-ssr>
            <!-- Tmp Banner --><div class="mainBanner3"></div><!-- Tmp Banner //-->
          </div>
        </div>
        <!-- Main Section2 //-->
        
        <no-ssr placeholder="Loading...">
          <main-photo-slide v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" v-bind:slice-end="10" />
        </no-ssr>

        <p>&nbsp;</p>

        <!-- footer -->
        <foot v-bind:static-domain="staticDomain" />
        <!-- footer //-->
      </div>

    </div><!--광고 토글시 백그라운드가 밀리지 않기위해 addian-->

    <script type="text/javascript" v-html="indexScript"></script>

    <!--  광고 PV 측정용 on main page -->
    <script src="http://compass.adop.cc/assets/js/adop/adop.js?v=14"></script>
    <ins class="adsbyadop" _adop_zon="c88f958c-ab5f-472c-bbae-8ae7357a798c" _adop_type="js" style="display:inline-block;width:0;height:0;" _page_url=""></ins>
    <!-- / 광고 PV 측정용 on main page -->
  </section>
</template>

<script>
import TopBanner from '~/components/TopBanner.vue';
import HeaderTop from '~/components/HeaderTop.vue';
import Gnb from '~/components/Gnb.vue';
import MainTopNews from '~/components/MainTopNews.vue';
import MainHeadline from '~/components/MainHeadline.vue';
import MainSports from '~/components/MainSports.vue';
import MainNews from '~/components/MainNews.vue';
import Focus from '~/components/Focus.vue';
import MainHot from '~/components/MainHot.vue';
import MainVideo1 from '~/components/MainVideo1.vue';
import MainVideo2 from '~/components/MainVideo2.vue';
import MainInside from '~/components/MainInside.vue';
import BaseballRecord from '~/components/BaseballRecord.vue';
import TalkTalk from '~/components/TalkTalk.vue';
import Coffee from '~/components/Coffee.vue';
import DeskColumn from '~/components/DeskColumn.vue';
import MainIssue from '~/components/MainIssue.vue';
import MainPhotoSlide from '~/components/MainPhotoSlide.vue';
import Foot from '~/components/Foot.vue';

export default {
  data() {
    return {
      staticDomain: process.env.staticDomain,
      apiDomain: process.env.apiDomain,
      USE_RECRUIT_LINK_IN_LIVENEWS: false,
      USE_SALE_SCOUTING_NOTEBOOK_IN_LIVENEWS: false,
      gotoTabScript: `var h_idx = 0;

      function goto_tab(page) {
        h_idx = page;

        if (h_idx < 0) h_idx = 2;
        else if (h_idx > 2) h_idx = 0;

        $('.headline_photo .news_list').hide();
        $($('.headline_photo .news_list')[h_idx]).show();
        $('#h_num_area').html((h_idx + 1) + '/<span>3</span>');
      }`,
      indexScript: `function scroll_realtimenews() {
          let next = parseInt($('#realtimenews_area').css('margin-top'), 10) - 19;
          if ((0 - next) >= $('#realtimenews_area').height()) {
            next = 0;
          }

          $('#realtimenews_area').animate({
            'margin-top': next
          }, 300, null);
        }

        // 팝업열기
        function openPopup(popupName, url, w, h) {
          var blnCookie = getCookie(popupName);
          if (!blnCookie) {
            window.open(url, popupName, "width="+ w +", height="+ h +", left=100, top=100, toolbar=no, location=no, status=no, menubar=no, scrollbars=no, resizable=no");
          }
        }`,
    }
  },
  components: {
    TopBanner,
    HeaderTop, Gnb, 
    MainTopNews, MainHeadline, MainSports,
    MainNews,
    Focus, MainHot, MainVideo1, MainVideo2, MainInside, BaseballRecord, TalkTalk, Coffee, DeskColumn, MainIssue, 
    MainPhotoSlide,
    Foot,
  },
  mounted() {
    let json_obj = get_realtimenews();

    let str = "";
    for (let i in json_obj) {
        str += `<li style="width:100%;text-align:left;"><a href="/article/${json_obj[i]['gisano']}">${json_obj[i]['title']}</a></li>`;
    }

    $('#realtimenews_area').html(str);
    setInterval("scroll_realtimenews()", 3000);

    // 팝업 : 2015 인턴 채용
    //openPopup('recruit2015_photo_intern', '/popup/recruit2015_photo_intern', 535, 671);

    // 팝업: 스카우팅 리포트 책 판매
    //openPopup('scouting_report2016', '/popup/scouting_report2016', 360, 572);
    
    // 임시배너
    if ($('.mainBanner3').length > 0) postscribe($('.mainBanner3'), `<a href="https://www.lpoint.com/app/event/LHEA100300.do?evnId=EVN501248" target="_blank"><img src="${process.env.staticDomain}/banner/banner_tmp.jpg?t=2019070401" height="150"></a>`);

    // 로그 기록
    var img = new Image();img.src="http://wl.yourdomain.com/loga/logmain.php";
  }
}
</script>

<style>
  #bg_wrapper {
    background-image: url('http://file.yourdomain.com/web2/images/book_bg.png');
    background-repeat: no-repeat;
    background-position: center 6px;
  }

  .headline_photo {
    height: 304px;
    overflow: hidden;
  }

  @media screen and (max-width:1050px) {
    #bg_wrapper {
      width:1050px;
    }
  }
</style>
