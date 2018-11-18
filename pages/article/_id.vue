<template>
    <section class="container">
        <!-- 키워드 매칭. 베스트 뉴스, 연관기사 박스 자리-->
        <div id="divLAS" style="visibility:hidden"></div>

        <!-- Top Banner -->
        <script v-if="ad_fix == 'interworksmedia'" type="text/javascript" src="http://ds.interworksmedia.co.kr/RealMedia/ads/adstream_jx.ads/monopoly.xxx.top/pyeongchang@x82"></script>
        <top-banner v-if="ad_fix != 'interworksmedia'" />
        <!-- Top Banner //-->

        <div id="wrap">
            <!-- Header -->
            <div id="header">
                <header-top v-bind:static-domain="staticDomain" />
                <gnb v-bind:static-domain="staticDomain" />
                <!-- GNB 아래 광고영역 -->
                <div class="advertising">
                    <!-- 좌측 박스 -->
                    <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script>
                    <ins class="adsbyadop" _adop_zon="9f98f9f7-fae3-49af-93a1-93815fbe4014" _adop_type="re" style="display:inline-block;width:278px;height:140px;" _page_url=""></ins>
                    <!-- /좌측 박스 -->
                    <!-- 우측 박스 -->
                    <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script>
                    <ins class="adsbyadop" _adop_zon="8132ad6b-4205-4545-83bb-cbfc0e3d04a0" _adop_type="re" style="display:inline-block;width:708px;height:140px;" _page_url=""></ins>
                    <!-- /우측 박스 -->
                </div>
                <!-- /GNB 아래 광고영역 -->
            </div>
            <!-- Header //-->

            <!-- contatiner -->
            <div id="container">
                <!-- location -->
                {{ location }}
                <!-- location -->

                <div class="detailTitle">
                    <h1>{{ news.TITLE }}</h1>
                    <div class="detailTitle__post-infos">{{ getNewsDisplayDate(news.OUTTIME) }}</div>
                    <div class="detailTitle__shares">
                        <span><a href="#" onClick="print_article()"><img alt="인쇄" :src="staticDomain +'/web2/images/ico/ico_print.gif'" /> 인쇄</a> |</span>
                        <div v-if="isShowSnsShareBtn">
                            <ul>
                                <li>
                                    <a href="javascript:void(alert('기자의 이메일이 없습니다.'))"><img :src="staticDomain +'/web2/images/ico/ico_zip.gif'" alt="이메일"></a>
                                </li>
                                <li>
                                    <a href="#" @click="snsShare('t')"><img :src="staticDomain +'/web2/images/ico/ico_twitter.gif'" alt="트위터"></a>
                                </li>
                                <li>
                                    <a href="#" @click="snsShare('f')"><img :src="staticDomain +'/web2/images/ico/ico_facebook.gif'" alt="페이스북"></a>
                                </li>
                                <li>
                                    <a href="#" @click="snsShare('b')"><img :src="staticDomain +'/web2/images/ico/ico_band.png'" alt="네이버 밴드"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="contents2">
                    <!-- detail box -->
                    <div class="detailBox">
                        <!-- 기사내용 -->
                        <div class="detailView" id="_article2" onclick="showLoginView();" :style="{ fontSize: '11px', display: element__article2CssStyleDisplay, cursor: 'pointer', textAlign: 'center', paddingTop: '50px', paddingBottom: '50px' }">
                            해당 기사는 로그인 후 보실 수 있습니다. => <span style="color:#043dc1">[로그인 하러가기]</span>
                        </div>
                        <div class="detailView" id="_article" :style="{ display: element__articleCssStyleDisplay }">
                            <div v-if="ad_fix == 'interworksmedia'" class="content-inner__banner">
                                <script type="text/javascript" src="http://ds.interworksmedia.co.kr/RealMedia/ads/adstream_jx.ads/monopoly.xxx.rect/pyeongchang@x83"></script>
                            </div>
                            <div v-else-if="ad_fix != 'interworksmedia' && gisa.includes(news.GISANO) && googleAdStatus != 'N'">
                                <div class="content-inner__banner">
                                    <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script><ins class="adsbyadop" _adop_zon="5212af72-cead-425b-8f15-4c23f49d21d3" _adop_type="re" style="display:inline-block;width:300px;height:250px;" _page_url=""></ins>
                                </div>
                            </div>

                            {{ news.ARTICLE }}

                            <div class="news-copyright">
                                [Copyright &copy; xxx 무단전재 및 재배포 금지]
                                <a href="https://www.facebook.com/xxxnews/" target="_blank">[xxx 페이스북에서 무엇이든 물어보세요 클릭!!!]</a>
                            </div>

                            <script type="text/javascript" src="http://js2.keywordsconnect.com/inspace_xxx.js"></script>

                            <div style="clear:both;width:100%;height:30px;"></div>

                            <script v-if="ad_fix == 'interworksmedia'" type="text/javascript" src="http://ds.interworksmedia.co.kr/RealMedia/ads/adstream_jx.ads/monopoly.xxx.bottom/pyeongchang@x85"></script>

                            <div class="byline-under__adver-thumbs--container">
                                <h4 class="byline-under__adver-thumbs--title" style="padding: 3px 5px; font-weight: bold; font-family: dotum,verdana;">가장 많이 본 콘텐츠</h4>
                                <ul class="byline-under__adver-thumbs" style="">
                                    <li class="byline-under__adver-thumb--left" style="display:inline-block; width: 49%;">
                                        <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script><ins class="adsbyadop" _adop_zon="4405206d-906e-4f47-a474-9b67e3f39c50" _adop_type="re" style="display:inline-block;width:335px;height:120px;" _page_url=""></ins>
                                    </li>
                                    <li class="byline-under__adver-thumb--right" style="display:inline-block; width: 49%;">
                                        <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script><ins class="adsbyadop" _adop_zon="af31d080-72df-4832-8750-737929e33d39" _adop_type="re" style="display:inline-block;width:335px;height:120px;" _page_url=""></ins>
                                    </li>
                                </ul>
                            </div>

                            <!-- 광고: 아이엠애드 바이라인하단 20160302 -->
                            <iframe src="http://adv.imadrep.co.kr/1668_01.html" width="100%" height="50" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowTransparency="false"></iframe>
                            <!-- 기사내용 //-->
                        </div>

                        <div style="padding-top:10px;"></div>

                        <script type="text/javascript" src="http://js.keywordsconnect.com/mtxxx2.js"></script>

                        <div style="padding-top:27px;"></div>

                        <div style="display:inline-block; background-color:#f432a8; color:#FDDDEE; padding-left:5px; padding-right:5px; font-weight:bold;">인기기사</div>

                        <div style="padding-top:6px;"></div>

                        <div class="byline-under__right--banner-01" style="position:relative; top: 40px;">
                            <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script>
                            <ins class="adsbyadop" _adop_zon="974493ce-a228-461b-8ddf-eef72caacf83" _adop_type="re" style="position:absolute; top:-135px; right:0;display:block;width:200px;height:200px;" _page_url=""></ins>
                        </div>

                        <hot-rel-articles v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" />

                        <!-- 기사 바이라인 하단 썸네일+텍스트 -->
                        <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script>
                        <ins class="adsbyadop" _adop_zon="57ab6d1b-61e7-4499-8216-00d0d8781a72" _adop_type="re" style="display:inline-block;margin-top: 25px;width:670px;height:170px;" _page_url=""></ins>
                        <!-- /기사 바이라인 하단 썸네일+텍스트 -->

                        <!-- 기사 바이라인 하단, 포토 슬라이드 위 배너 -->
                        <div v-if="AD_AD4989" style="width:100%;text-align:center;margin-top:25px;">
                            <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script><ins class="adsbyadop" _adop_zon="6c7689b9-6dce-4311-a71c-17de5ab44bf5" _adop_type="re" style="display:inline-block;width:468px;height:60px;" _page_url=""></ins>
                        </div><!-- /기사 바이라인 하단, 포토 슬라이드 위 배너 -->

                        <photo-slide v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" v-bind:slice-end="10" />

                        <!-- 광고: BEST 인기정보 -->
                        <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script>
                        <ins class="adsbyadop" _adop_zon="f0d7f20e-05f3-433c-9533-9e325dcfb310" _adop_type="re" style="display:block;margin-top:40px;width:650px;height:288px;" _page_url=""></ins>
                        <!-- /광고: BEST 인기정보 -->

                        <div style="padding-top:40px;"></div>

                        <photo-shot v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" />
                        <no-ssr placeholder="Loading...">
                            <major-news v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" />
                        </no-ssr>

                        <!-- 광고: SHOPPING & LIFE 01 - Footer 위 thumb 4 slot -->
                        <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script><ins class="adsbyadop" _adop_zon="dbb75d91-801e-4bb4-a364-36c4dac8cd91" _adop_type="re" style="display:block;margin-top:20px;width:652px;height:200px;" _page_url=""></ins>
                        <!-- /광고: SHOPPING & LIFE 01 - Footer 위 thumb 4 slot -->

                        <!-- 광고: SHOPPING & LIFE 02 - Footer 위 thumb 4 slot -->
                        <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script>
                        <ins class="adsbyadop" _adop_zon="417ea9b5-ab74-40bc-8005-73e9de0601b5" _adop_type="re" style="display:block;margin:20px 0;width:650px;height:240px;" _page_url=""></ins>
                        <!-- /광고: SHOPPING & LIFE 02 - Footer 위 thumb 4 slot -->
                    </div>
                    <!-- detail box //-->

                    <!-- aside -->
                    <div id="aside2">
                        <!-- 광고: 내가 본 정보 -->
                        <div style="width:298px;height:10px;border-top:1px solid #cccccc;"></div>
                        <div style="margin:0px 1px 0px 1px;overflow:hidden;">
                            <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script><ins class="adsbyadop" _adop_zon="2ba28505-8a8f-4850-99a8-87057b0545c0" _adop_type="re" style="display:inline-block;width:300px;height:214px;" _page_url=""></ins>
                        </div>
                        <div style="width:298px;height:15px;"></div>
                        <!-- /광고: 내가 본 정보 -->
                        <!-- 광고: n2ad #1 -->
                        <iframe v-if="ad_fix == 'n2ad'" width="300" height="250" border="0" frameborder="0" scrolling="no" src="http://ra.ntwoad.co.kr/n2ad_iframe.html?n2ad_cd=ODQyJTdDXyU3QzIxMTE="></iframe>
                        <!-- /광고: n2ad #1 -->
                        <no-ssr placeholder="Loading...">
                            <video1 v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" />
                        </no-ssr>
                        <!-- 광고: 가장 많이 본 정보 - 아이엠애드 -->
                        <div style="margin:0 1px 10px 1px;overflow:hidden;">
                            <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script><ins class="adsbyadop" _adop_zon="3c3bc4f7-6ead-49a9-8de0-44932bc6cdc2" _adop_type="re" style="display:inline-block;width:300px;height:214px;" _page_url=""></ins>
                        </div>
                        <!-- /광고: 가장 많이 본 정보 - 아이엠애드 -->
                        <!-- 광고: n2ad 2번 배너 -->
                        <iframe v-if="ad_fix == 'n2ad'" width="300" height="250" border="0" frameborder="0" scrolling="no" src="http://ra.ntwoad.co.kr/n2ad_iframe.html?n2ad_cd=ODQyJTdDXyU3QzIxMTI="></iframe>
                        <!-- /광고: n2ad 2번 배너 -->
                        
                        <no-ssr placeholder="Loading...">
                            <coffee v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" />
                        </no-ssr>
                        <no-ssr placeholder="Loading...">
                            <xxx-hot v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" />
                        </no-ssr>
                        
                        <!-- Banner: sidebar 300x250 -->
                        <div v-if="ad_fix == 'interworksmedia'" class="sidebar-middle__banner" style="margin-bottom: 2em">
                            <!-- <img src="http://placehold.it/300x250" /> -->
                            <script type="text/javascript" src="http://ds.interworksmedia.co.kr/RealMedia/ads/adstream_jx.ads/monopoly.xxx2.rect/olympic@x84"></script>
                        </div>
                        <!-- /Banner: sidebar 300x250 -->

                        <!-- n2ad 3번 배너 -->
                        <iframe v-if="ad_fix == 'n2ad'" width="300" height="250" border="0" frameborder="0" scrolling="no" src="http://ra.ntwoad.co.kr/n2ad_iframe.html?n2ad_cd=ODQyJTdDXyU3QzIxMTM="></iframe>

                        <script v-if="ad_fix == 'interworksmedia'" type="text/javascript" src="http://ds.interworksmedia.co.kr/RealMedia/ads/adstream_jx.ads/monopoly.xxx2.rect/pyeongchang@x84"></script>
                        <div  v-if="ad_fix == ''">
                            <!-- 배너: MT -->
                            <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script><ins class="adsbyadop" _adop_zon="1b75458d-bf99-4025-91ed-77e791cab4f5" _adop_type="re" style="display:inline-block;width:300px;height:250px;" _page_url=""></ins>
                            <!-- /배너: MT -->
                        </div>
                        <div style="width:298px;height:15px;"></div>

                        <!-- n2ad 6번 배너 -->
                        <iframe v-if="ad_fix == 'n2ad'" width="300" height="250" border="0" frameborder="0" scrolling="no" src="http://ra.ntwoad.co.kr/n2ad_iframe.html?n2ad_cd=ODQyJTdDXyU3QzIxMTQ="></iframe>

                        <!-- n2ad 8번 배너 -->
                        <iframe v-if="ad_fix == 'n2ad'" width="300" height="250" border="0" frameborder="0" scrolling="no" src="http://ra.ntwoad.co.kr/n2ad_iframe.html?n2ad_cd=ODQyJTdDXyU3QzIxMTU="></iframe>

                        <!-- 네티즌 핫이슈 -->
                        <div v-if="ad_fix == ''">
                            <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script>
                            <ins class="adsbyadop" _adop_zon="14d724fb-e814-40ed-8215-293e0428c861" _adop_type="re" style="display:block;width:300px;height:280px;" _page_url=""></ins>
                        </div>
                        <!-- /네티즌 핫이슈 -->

                        <!-- 광고: 인기쇼핑뉴스 - text type 8 slot - AD31 -->
                        <div class="aside-ad__favorite-shopping-news">
                            <div class="aside-ad__favorite-shopping-news--title">인기쇼핑뉴스</div>
                            <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script>
                            <ins class="adsbyadop" _adop_zon="38e677dd-0168-4113-8f24-0b21afe230ea" _adop_type="re" style="display:inline-block;width:300px;height:175px;" _page_url=""></ins>
                        </div>
                        <!-- /광고: 인기쇼핑뉴스 - text type 8 slot - AD31 -->

                        <no-ssr placeholder="Loading...">
                            <hot-news v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" />
                        </no-ssr>
                        
                        <!-- 광고: 제이애드 - 함께보면 좋은 정보 - text 8 slot -->
                        <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script>
                        <ins class="adsbyadop" _adop_zon="f598f4da-a587-43da-84c2-2b5c76ba1471" _adop_type="re" style="display:block;width:300px;height:220px;" _page_url=""></ins>
                        <!-- /광고: 제이애드 - 함께보면 좋은 정보 - text 8 slot -->

                        <!-- 광고: 위치= 기사 상세 sidebar 중간정도, 오늘의 인기정보 위 - MT -->
                        <iframe src="http://compass.adop.cc/RD/d7f8355b-3c08-453d-bb86-f59bacb78650?type=iframe&amp;loc=&amp;size_width=300&amp;size_height=250" id="d7f8355b-3c08-453d-bb86-f59bacb78650" frameBorder="0" marginWidth="0" marginHeight="0" paddingWidth="0" paddingHeight="0" scrolling="no" style="width: 300px; height: 250px;"></iframe>
                        <!-- /광고: 위치= 기사 상세 sidebar 중간정도, 오늘의 인기정보 위 - MT -->

                        <!-- 배너 : 위치= 기사 상세 sidebar 중간정도, xxx 인사이드 위 -->
                        <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script>
                        <ins class="adsbyadop" _adop_zon="0a8fc396-684e-418d-adad-cdcba705891a" _adop_type="re" style="display:block;margin-bottom:20px;width:300px;height:250px;" _page_url=""></ins>
                        <!-- /배너 : 위치= 기사 상세 sidebar 중간정도, xxx 인사이드 위 -->

                        <no-ssr placeholder="Loading...">
                            <inside v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" />
                        </no-ssr>
                        
                        <!-- 광고: 오늘의 핫 클릭 - thumb 2 + text 8 slot -->
                        <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script>
                        <ins class="adsbyadop" _adop_zon="d434f392-55ef-474c-bfb9-dfeb25bc81cb" _adop_type="re" style="display:block;margin-bottom:20px;width:300px;height:268px;" _page_url=""></ins>
                        <!-- /광고: 오늘의 핫 클릭 - thumb 2 + text 8 slot -->

                        <!-- 광고: BEST 핫클릭! - text 8 slot -->
                        <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script>
                        <ins class="adsbyadop" _adop_zon="c22dd7e2-3c70-4f72-8d36-235c3f0a6198" _adop_type="re" style="display:inline-block;width:300px;height:240px;" _page_url=""></ins>
                        <!-- /광고: BEST 핫클릭! - text 8 slot -->

                        <!-- 광고: 최신 인기 정보 - text 8 slot -->
                        <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script>
                        <ins class="adsbyadop" _adop_zon="2ce19de9-a737-442c-8e58-57c175c75b91" _adop_type="re" style="display:inline-block;width:300px;height:240px;" _page_url=""></ins>
                        <!-- /광고: 최신 인기 정보 - text 8 slot -->
                        
                        <!-- 광고: 똑똑한 소비생활 - text 8 slot -->
                        <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script>
                        <ins class="adsbyadop" _adop_zon="045a3432-8a66-4fff-8b6a-0a4ccb85250d" _adop_type="re" style="display:block;margin-bottom:10px;width:300px;height:214px;" _page_url=""></ins>
                        <!-- /광고: 똑똑한 소비생활 - text 8 slot -->

                        <no-ssr placeholder="새영화...">
                            <new-movie v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" v-once />
                        </no-ssr>
                        <no-ssr placeholder="자동차...">
                            <car v-bind:static-domain="staticDomain" v-bind:api-domain="apiDomain" v-once />
                        </no-ssr>
                    </div>
                    <!-- /aside -->
                </div>
            </div>
            <!-- /contatiner -->

            <!-- footer -->
            <foot v-bind:static-domain="staticDomain" />
            <!-- /footer -->

            <!-- whos amung us -->
            <div class="whos-amung-us" style="display:none;"><script id="_wauef1" v-html="whosAmungUsScript"></script><script async src="//waust.at/s.js"></script></div>
            <!-- /whos amung us -->
        </div>

        <no-ssr>
            <div id="left_wing_ad" :style="'position:absolute;top:'+ wing_top +'px;left:50%;margin-left:-630px;'">
                <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script><ins class="adsbyadop" _adop_zon="41aad732-a4d0-4b79-8c86-3d5df10bd974" _adop_type="re" style="display:inline-block;width:120px;height:600px;" _page_url=""></ins>
            </div>
        </no-ssr>
        <no-ssr>
            <div id="right_wing_ad" :style="'position:absolute;top:'+ right_wing_top +'px;left:50%;margin-left:512px;'">
                <iframe src="http://adex.ednplus.com/xc/h/Fz558m3e" width="120" height="600" frameborder="0" scrolling="no" topmargin="0" leftmargin="0" marginwidth="0" marginheight="0"></iframe>
            </div>
        </no-ssr>

        <!-- Javacripts -->
        <script type="text/javascript" :src="staticDomain +'/web2/js/jquery.animateNumber.min.js?ver=0.0.13'"></script>
        <script type="text/javascript" :src="staticDomain +'/web2/js/realtime_session.js?ver=0.0.5'"></script>
        <script type="text/javascript" v-html="realtimeSessionScript"></script>

        <!-- HNS 포토영역 배너 스크립트 교체 -->
        <script type="text/javascript" :src="staticDomain +'/web2/js/xxx.mt_hns.js?v=2017121201'"></script>

        <script type="text/javascript" src="http://js2.keywordsconnect.com/iconad_xxx.js"></script>

        <!-- 배너 : Footer 아래 최하단 Big size 리얼클릭 배너 -->
        <no-ssr>
            <div class="banner_1024_1024_1446537727" style="text-align:center;clear:both">
                <div id="realssp_hnscom00005_14509" class="realssp_dv" data-mcode="aG5zY29tMDAwMDVfMTQ1MDk=" title="리얼클릭 배너광고"></div>
                <script src="//ssp.realclick.co.kr/realclickssp.js?v=1.0&m=hnscom00005_14509&t=j" async></script>
            </div>
        </no-ssr>

        <div v-if="blockEndingPopupAd !== 'Y'">
            <!-- 아이커버형 배너 --><iframe src='http://www.dreamsearch.or.kr/servlet/iadbn?from="+escape(document.referrer)+"&u=2016022500009&us=15307&s=16098&psb=99' scrolling='no' frameborder=0 width=0 height=0></iframe>
        </div>

        <!-- 인터웍스 인터플레이 동영상 광고 -->
        <script type="text/javascript" src="//interface.interworksmedia.co.kr/js/iwmads.min.js"></script>
        <script type="text/javascript" v-html="interworksmediaScript"></script>
        <!-- /인터웍스 인터플레이 동영상 광고 -->

        <!-- 광고: 애드오피 비디오 -->
        <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script>
        <ins class="adsbyadop" _adop_zon="34d3b0e6-48eb-48d5-9f19-6af4ff985283" _adop_type="re" style="display:inline-block;width:1px;height:1px;" _page_url=""></ins>
        <!-- /광고: 애드오피 비디오 -->

        <!--  광고 PV 측정용 on news detail page -->
        <script src="http://compass.adop.cc/assets/js/adop/adop.js?v=14"></script>
        <ins class="adsbyadop" _adop_zon="33ded4e7-9a05-4412-8ef8-3a320137dff1" _adop_type="js" style="display:inline-block;width:0;height:0;" _page_url=""></ins>
        <!-- / 광고 PV 측정용 on news detail page -->
        <!--    <script src="//js.adb0t.com/custom/xxx.js">/* 바나나 광고 통계 수집과 리타게팅 송출 스크립트 */</script>-->
    </section>
</template>

<script>
import helper from "~/plugins/helper";
import TopBanner from '~/components/TopBanner.vue';
import HeaderTop from '~/components/HeaderTop.vue';
import Gnb from '~/components/Gnb.vue';
import HotRelArticles from "~/components/HotRelArticles.vue";
import PhotoShot from "~/components/PhotoShot.vue";
import MajorNews from "~/components/MajorNews.vue";
import PhotoSlide from "~/components/PhotoSlide.vue";
import FortuneBox from "~/components/FortuneBox.vue";
import Video1 from "~/components/Video1.vue";
import Coffee from "~/components/Coffee.vue";
import xxxHot from "~/components/xxxHot.vue";
import HotNews from "~/components/HotNews.vue";
import Inside from "~/components/Inside.vue";
import NewMovie from "~/components/NewMovie.vue";
import Car from "~/components/Car.vue";
import Foot from '~/components/Foot.vue';

export default {
    components: {
        TopBanner, HeaderTop, Gnb, 
        HotRelArticles, PhotoShot, MajorNews, PhotoSlide, FortuneBox, 
        Video1, Coffee, xxxHot, HotNews, Inside, NewMovie, Car, 
        Foot
    },
    data() {
        return {
            staticDomain: process.env.staticDomain,
            apiDomain: process.env.apiDomain,
            query: {},
            location: '',
            isNeedToLoginToView: false,
            element__articleCssStyleDisplay: 'none',
            element__article2CssStyleDisplay: 'none',
            ad_fix: '',
            blockEndingPopupAd: '',
            AD_AD4989: true,
            AD_LUMIEYES: false,
            wing_top: 450,
            right_wing_top: 450,
            isShowSnsShareBtn: true,
            snsShareBtns: '',
            gisa: ['G1109655101','G1109654992','G1109654192','G1109654066','G1109653741','G1109653727','G1109653720','G1109653700','G1109636037','G1109636035','G1109636032','G1109636031','G1109636029','G1109632153','G1109632150','G1109632148','G1109632138','G1109632137','G1109632135','G1109632131','G1109632127','G1109658298'],
            realtimeSessionScript: ``,
            whosAmungUsScript: `var _wau = _wau || []; _wau.push(["small", "4fcaefxh1h", "ef1"]);`,
            interworksmediaScript: ``,
        }
    },
    head() {
        return {
            title: this.title,
            meta: [
                { hid: 'description', name: 'description', content: this.description },
                { hid: 'og_type', property: 'og:type', content: 'article' },
                { hid: 'og_title', property: 'og:title', content: this.title },
                { hid: 'og_description', property: 'og:description', content: this.description },
                { hid: 'og_image', property: 'og:image', content: this.image },
                { hid: "twitter_title", name: "twitter:title", content: this.title },
                { hid: "twitter_image", name: "twitter:image", content: this.image },
                { hid: "twitter_description", name: "twitter:description", content: this.description },
            ]
        }
    },
    async asyncData({ params, app, query }) {
        let data = {};
        let endpoint = process.env.apiDomain +'/api/v1/articles/'+ params.id;
        data.news = await app.$axios.$get(endpoint);
        data.query = query;
        // For meta tags
        data.title = data.news.TITLE;
        data.description = data.news.ARTICLE.replace(/<[^>]+>/ig, '').replace(/^\[[^\]]+\]/i, '').replace(/^ /i, '').substr(0, 80);
        data.images = data.news.IMG.split('|');
        data.image = data.images[0];
        data.image = "http://file.xxx.co.kr/article/"+ data.image.substr(0, 4) +"/"+ data.image.substr(4, 2) +"/"+ data.image.substr(6, 2) +"/"+ data.image;

        return data;
    },
    mounted() {
        this.ad_fix = this.query.ad_fix;
        this.blockEndingPopupAd = this.query.blockEndingPopupAd;
        let commentflag = false;
        let googleAdStatus = this.getArticleAdExposeStatus(this.news.GISANO, "google");

        if (this.isLogined()) {
            this.isNeedToLoginToView = false;
        }

        if ( this.isNeedToLoginToView ) {
            this.element__article2CssStyleDisplay = '';
        } else {
            this.element__articleCssStyleDisplay = '';
        }

        let newsData = {
            "gisano": this.news.GISANO,
            "uid": this.news.UID,
            "code": this.news.CODE,
            "i_code2": this.news.I_CODE2
        };

        this.isNeedToLoginToView = (this.isNeedToLoginToView)? 'true' : 'false';
        let userAgentForLoging = '';

        if ( typeof navigator != 'undefined' && navigator != null ) {
            if ( typeof navigator.userAgent != 'undefined' && navigator.userAgent != null ) {
                userAgentForLoging = navigator.userAgent;
            }
        }

        // web logging
        if (process.env.NODE_ENV === 'production') {
            let logData = {
                "gisano": this.news.GISANO,
                "title": this.news.TITLE.replace('"', '\"'),
                "writer": this.news.GIZA_NAME,
                "post_date": this.getNewsDisplayDate(news.OUTTIME),
                "user_ip": SERVER.REMOTE_ADDR,
                "server_ip": SERVER.SERVER_ADDR,
                "http_user_agent": navigator.userAgent,
                "http_referer": document.referrer,
                "http_host": location.host
            };
            $.get("/weblog.php", logData);
        }

        if (this.isNeedToLoginToView) {
            this.showLoginView();
        }

        // 본문 내 배너 위치시키고 보이기
        $('.detailView .adver').each(function () {
            $(this).removeClass('adver');
        });

        $('.videoWrapper').each(function(i, node) {
            var $node = $(node);
            var html = $node.html();
            html = $.trim(html);

            if (html == '') {
                $node.remove();
            }
        });

        $('.videoWrapper iframe').each(function(i, node) {
            var $node = $(node);

            $node.parent()
                .css('position', 'relative')
                .css('padding-bottom', '56.25%')
                .css('padding-top', '25px')
                .css('height', '0px');

            $node
                .css('position', 'absolute')
                .css('top', '0')
                .css('left', '0')
                .css('width', '100%')
                .css('height', '100%');
        });

        $('#pre_page_btn').live('click',function(e) {
            $('#scroll_area').css('margin-top',0);
            e.preventDefault();
            $('#page_area').text("1/2");
            $('#pre_wrapper').html('&nbsp;&nbsp;');
            $('#next_wrapper').html('<a href="#" id="next_page_btn">&gt;</a>');
        });

        $('#next_page_btn').live('click',function(e) {
            $('#scroll_area').css('margin-top',-565);
            $('#page_area').text("2/2");
            $('#pre_wrapper').html('<a href="#" id="pre_page_btn">&lt;</a>');
            $('#next_wrapper').html('&nbsp;&nbsp;');
            e.preventDefault();
        });

        let wing_top = this.wing_top;
        let right_wing_top = this.right_wing_top;
        let wing_height = 600;
        /* 기사 본문 첫번째 사진 inner 배너 - HNS 커뮤니케이션
        * photo_ad() 함수 선언은 [script src="//file.xxx.co.kr/xxx/static/web2/js/xxx.mt_hns.js"]
        * photo_ad() 함수 렌더링후 생성 코드는 iframe src="http://ad.ad4989.co.kr/cgi-bin/PelicanC.dll?impr?pageid=00HQ&out=iframe"
        * 소스 하단에서 한번 더 호출됨.
        */
        photo_ad();

        $(window).bind('scroll', function() {
            if ($('#left_wing_ad').height()) {
                let s_height = (document.compatMode == 'CSS1Compat')? document.documentElement.scrollHeight : document.body.scrollHeight;
                let s_top = $(document).scrollTop();
                let footer_height = 155;

                if (s_top + footer_height + $('#left_wing_ad').height() <= s_height && s_top > wing_top) {
                    $('#left_wing_ad').css('top', s_top + ($(window).height() - wing_height) / 2);
                } else {
                    if (s_top > wing_top) {
                        $('#left_wing_ad').css('top', s_height - $('#left_wing_ad').height() - footer_height);
                    } else {
                        $('#left_wing_ad').css('top', wing_top);
                    }
                }
            }

            if ($('#right_wing_ad').height()) {
                let s_height = (document.compatMode == 'CSS1Compat')? document.documentElement.scrollHeight : document.body.scrollHeight;
                let s_top = $(document).scrollTop();
                let footer_height = 155;

                if (s_top+footer_height+$('#right_wing_ad').height()<=s_height && s_top>right_wing_top) {
                    $('#right_wing_ad').css('top',s_top+($(window).height()-wing_height)/2);
                } else {
                    if (s_top>right_wing_top) {
                        $('#right_wing_ad').css('top',s_height-$('#right_wing_ad').height()-footer_height);
                    } else {
                        $('#right_wing_ad').css('top',right_wing_top);
                    }
                }
            }
        });

        function comment_length_check() {
            var obj = document.comment_form.content;
            var n = obj.value.length;
            $('#comment_length').text(n);
            if (n > 150) {
                alert('150자까지만 입력 가능합니다.');
                obj.value = obj.value.substring(0,150);
            }
        }

        function submit_comment_form() {
            var f=document.comment_form;

            if (commentflag==false || f.content.value.trim().length==0 ) {
                alert('댓글을 입력하세요.');
                return false;
            }
            f.action="/main/comment_insert";
            f.submit();
        }

        function print_article() {
            window.open(`/main/article_print/${news.GISANO}`,"print_pop","width=720,height=600,scrollbars=yes");
        }

        function goto_page(page, gisano) {
            $('#comment_area').load(`/main/comment_list/${gisano}/${page}`);
        }

        function twitter_login() {
            window.open("/lib/twitteroauth/index.php","pop_login","");
        }

        function facebook_login() {
            window.open("/lib/facebook-php-sdk/examples/example.php","pop_login","");
        }

        function me2day_login() {
            window.open("/sociallogin/me2_login","pop_login","");
        }

        function sns_login_success() {
            switch(Get_Cookie("user_sns")) {
                case "twitter":
                    $('.snsLogin #facebook_btn').attr('src', staticDomain +'/web2/images/ico/ico_facebook_off.gif');
                    $('.snsLogin #me2day_btn').attr('src', staticDomain +'/web2/images/ico/ico_me2day_off.gif');
                    $('.snsLogin #twitter_btn').attr('src', staticDomain +'/web2/images/ico/ico_twitter_on.gif');
                    break;
                case "facebook":
                    $('.snsLogin #facebook_btn').attr('src', staticDomain +'/web2/images/ico/ico_facebook_on.gif');
                    $('.snsLogin #me2day_btn').attr('src', staticDomain +'/web2/images/ico/ico_me2day_off.gif');
                    $('.snsLogin #twitter_btn').attr('src', staticDomain +'/web2/images/ico/ico_twitter_off.gif');

                    break;
                case "me2day":
                    $('.snsLogin #facebook_btn').attr('src', staticDomain +'/web2/images/ico/ico_facebook_off.gif');
                    $('.snsLogin #me2day_btn').attr('src', staticDomain +'/web2/images/ico/ico_me2day_on.gif');
                    $('.snsLogin #twitter_btn').attr('src', staticDomain +'/web2/images/ico/ico_twitter_off.gif');
                    break;
            }
        }

        let checkDklLoad = setTimeout(function() {
            if (typeof(DKL_ConfChild) == "undefined") {
                if (this.AD_LUMIEYES) {
                    if (document.getElementById("ifrm_photolink").src == "about:blank") {
                        document.getElementById("ifrm_photolink").src = "http://p.lumieyes.com/frm2_utf8.asp?domain=xxx.co.kr";
                    }
                }

                if (document.getElementById("ifrm_google_ad").src == "about:blank") {
                    document.getElementById("ifrm_google_ad").src = "http://file.xxx.co.kr/html/ad/google_ad.html";
                }

                photo_ad();
            }
        },5000);

        if (process.env.NODE_ENV === 'production') {
            let img = new Image(); img.src = "http://wl.xxx.co.kr/loga/loga_devel.php?r="+ encodeURIComponent(document.referrer) +"&ua="+ encodeURIComponent(userAgentForLoging);

            var img = new Image(); img.src = "http://wl.xxx.co.kr/loga/logm.php";
        }

        $('#ads_mncmedia__1').attr('src', "http://ads.mncmedia.co.kr/mad/xxx/bt_text_1.html").show();
        $('#ads_mncmedia__2').attr('src', "http://ads.mncmedia.co.kr/mad/xxx/bt_text_2.html").show();

        if (this.ad_fix == "interworksmedia") {
            iwmads('#_article > p:eq(0)', {mediaId: 'xxx', site: 'monopoly.xxx.interplay/pyeongchang', reNewsId: /(^.*\/)(\w+)(&?.*)$/, xButton: true});
        } else {
            iwmads('#_article > p:eq(4)', {mediaId: 'xxx', site: 'xxx.mt.interplay/xxx_news', reNewsId: /(^.*\/)(\w+)(&?.*)$/, xButton: true});
        }

        /** 
         * 실시간 TOP5 기사 위젯 IIFE
         */
        let realtimeSession = (function(gisano) {
            return function(gisano) {
                // let gisano = this.news.GISANO;

                if (!gisano) return false;

                $.getJSON('/api/realtime_session/'+ gisano)
                    .done(function(json) {
                        // int json.hits.total // 최근 사이트 전체 PV
                        // int json.aggregations.current_news.doc_count  // 이 기사의 최근 PV
                        // Array json.aggregations.top_news.buckets // 최근 톱뉴스 리스트
                        // json.aggregations.top_news.buckets[0].key    // 최근 톱뉴스 gisano
                        // json.aggregations.top_news.buckets[0].doc_count  // 최근 톱뉴스 PV
                        // json.aggregations.top_news.buckets[0].item.hits.hits[0]._source.title
                        // json.aggregations.top_news.buckets[0].item.hits.hits[0]._source.writer
                        // json.aggregations.top_news.buckets[0].item.hits.hits[0]._source.log_date
                        //console.log('활성 이용자수 JSON Data : ', json);
                        if (json.aggregations.top_news.buckets.length == 0) return;	// 실시간 TOP 기사 목록이 누락되면 중지

                        // 실시간 사용자 Component 컨테이너. 개발시에만 dynamic 하게 포함시키고 실운영시는 컨테이너는 사이드바에 포함하도록!
                        if ($('.realtime-session').length == 0) {
                            let tmpHtml = '<div class="realtime-session" style="display: none">';
                            tmpHtml += '<div class="realtime-session__countdown"><span class="realtime-session__countdown-count">10</span>초</div>';
                            tmpHtml += '<div class="realtime-session__current">현재<h3><span class="realtime-session__current-count count">0</span></h3>명이 이 기사를<br>보고 있습니다</div>';
                            tmpHtml += '<div class="realtime-session__list-wrapper">';
                            tmpHtml += '<h4>실시간 TOP5 기사</h4>';
                            tmpHtml += '<ol class="realtime-session__list"></ol>';
                            tmpHtml += '</div>';
                            tmpHtml += '</div>';

                            // 본문 내 첫번째 사진 컨테이너
                            let $container = null;
                            //$container = $('.detailView img[src*="xxx.co.kr"]:first').parents('div:first');
                            $container = $('.detailView img[src*="xxx.co.kr"]:first').parent();
                            // 본문 내 첫번째 사진을 다른 스크립트가 table 로 감싸버린 경우
                            // if ($('.detailView img[src*="xxx.co.kr"]:first').parent().get(0).tagName.toLowerCase() == 'td') {}

                            $container.append(tmpHtml);

                            realtimeSession();
                        }

                        // 현재 세션 수
                        let currentNewsSessionCount = 1;    // 현재 접속자는 자기 자신 1
                        if (json.aggregations.current_news.doc_count > 1) currentNewsSessionCount = json.aggregations.current_news.doc_count;
                        // 현재 세션 수 업데이트
                        $('.realtime-session__current-count').animateNumber({ number: currentNewsSessionCount });

                        let html = '';

                        let item, newsNo, newsPageview = 0, title = '', writer = '';

                        for(let i = 0; i < json.aggregations.top_news.buckets.length; i++) {
                            row = json.aggregations.top_news.buckets[i];
                            newsNo = row.key;
                            newsUsercount = row.doc_count;
                            title = row.item.hits.hits[0]._source.title;
                            writer = row.item.hits.hits[0]._source.writer;

                            html += '<li><a href="/article/'+ newsNo +'"><span class="count">'+ newsUsercount +'명</span> '+ title +'</li>';
                        }

                        $('.realtime-session__list').html(html);

                        if ($('.realtime-session').is(':hidden')) {
                            $('.realtime-session').show();

                            // 10초마다 업데이트
                            setInterval(function() {
                            $('.realtime-session__countdown-count')
                                .prop('number', 10)
                                .animateNumber({
                                    number: 0,
                                    numberStep: function (now, tween) {
                                        let target = $(tween.elem),
                                        rounded_now = Math.round(now);

                                        if (now === tween.end) {
                                            realtimeSession();
                                        } else {
                                            target.text(rounded_now);
                                        }
                                    }
                                }, 10000, 'linear');
                            }, 1000 * 10);
                        }
                    });
            }
        }(this.news.GISANO));
        // 실시간 TOP5 기사 위젯 즉시 호출
        realtimeSession();
    },
    methods: {
        getArticleAdExposeStatus(str1, str2) {
            return (str1 == str2);
        },
        isLogined() {
            return false;
        },
        getNewsDisplayDate(data) {
            return data.substr(0, 4) +"-"+ data.substr(4, 2) +"-"+ data.substr(6, 2) +" "+ data.substr(8, 2) +":"+ data.substr(10, 2);
        },
        showLoginView() {
            return false;
        },
        showSnsShareBtns() {
            let articleCode = "";
            let title = "";
            let email = "";

            if (this.news instanceof Array) {
                if ( this.news.GISANO ) {
                    articleCode = this.news.GISANO;
                } else if ( this.news.gisano ) {
                    articleCode = this.news.gisano;
                }
                
                if ( this.news.TITLE ) {
                    title = this.news.TITLE;
                } else if ( this.news.title ) {
                    title = this.news.title;
                }
                
                title = title.trim();
                
                if ( this.news.giza_mail ) {
                    email = this.news.giza_mail;
                } else if ( this.news.gizaMail ) {
                    email = this.news.gizaMail;
                }
            }
            
            if (email && email.indexOf('@') < 0 ) {
                email += '@xxx.co.kr';
            }
            
            let infs = {
                'email' : {
                    'name' : '이메일',
                    'icoCode' : 'zip',
                },
                'twitter' : {
                    'argCode' : 't',
                    'name' : '트위터',
                },
                'facebook' : {
                    'argCode' : 'f',
                    'name' : '페이스북',
                },
                'band' : {
                    'argCode' : 'f',
                    'name' : '페이스북',
                    'iconExt' : 'png',
                },
            };
            
            let inf = {};
            let icoCode = "";
            let name = "";
            let argCode = "";
            let iconExt = "";
            let icoUrl = "";
            let titleHtmlSafe = "";
            let href = "";

            let snsShareBtns = "<ul>";
            
            for (let key in infs) {
                inf = infs[key];

                snsShareBtns += "<li>";
                
                icoCode = (inf.icoCode)? inf.icoCode : key;
                name = inf.name;
                argCode = inf.argCode;
                iconExt = inf.iconExt;
                
                if (!iconExt) iconExt = 'gif';
                
                icoUrl = this.staticDomain + `/web2/images/ico/ico_${icoCode}.${iconExt}`;
                
                titleHtmlSafe = title;
                titleHtmlSafe = helper.htmlEntityDecode(titleHtmlSafe);
                titleHtmlSafe = titleHtmlSafe.replace('"', '＇');
                titleHtmlSafe = titleHtmlSafe.replace("'", '＇');
                
                if ( key != 'email' ) {
                    if ( key == 'band' ) {
                        snsShareBtns += `<a href="#" onClick="window.open('http://www.band.us/plugin/share?body=[xxx 뉴스] ${titleHtmlSafe} http://xxx.yourdomain.com/article/${articleCode}', 'share_band', 'width=410, height=400, resizable=no'); return false;"><img src="${icoUrl}" alt="${name}" /></a>`;
                    } else {
                        snsShareBtns += `<a href="#" onClick="sns_share('${argCode}', '${articleCode}'); return false;"><img src="${icoUrl}" alt="${name}" /></a>`;
                    }
                } else {
                    if (!email) {
                        href = `javascript:void(alert('기자의 이메일이 없습니다.'))`;
                    } else {
                        href = `mailto:${email}`;
                    }
                    
                    snsShareBtns += `<a href="${href}"><img src="${icoUrl}" alt="${name}" /></a>`;
                }
                
                snsShareBtns += "</li>";
            }
            
            snsShareBtns += "</ul>";
            
            this.snsShareBtns = snsShareBtns;
        },
        snsShare(target) {
            if (target == 'b') {
                window.open(`http://www.band.us/plugin/share?body=${this.news.TITLE}  http://xxx.yourdomain.com/article/${this.news.GISANO}`, 'share_band', 'width=410, height=400, resizable=no');
            } else {
                sns_share(target, this.news.GISANO);
            }
        }
    }
}
</script>

<style scoped>
#main_img {
    float:left;
    width:425px;
    height:502px;
    margin-bottom:10px;
    text-align:center;
}

#main_img img {
    position:relative;
    max-height:502px;
    margin-top:-251px;
    top:50%;
}

.fortuneBox { width:650px; margin:50px 0px; }
.fortuneBox ul li { float: left; width: 16%; padding-bottom: 7px; text-align: center; font-size: 11px; }

ul.xxxHotRelArticleListDsp li {
    list-style:none;
    background:url('http://ads.mncmedia.co.kr/mad/xxx/images/bul_dott1.gif') no-repeat 0 6px;
    padding-left:7px;
    font-family: dotum, gulim;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    font-weight:bold;
    font-size:14px;
}

.detailView p { margin-bottom: 1.5em }
.content-inner__banner { float:right;margin-left:18px;margin-bottom:10px; }
.news-nametag { margin: -1em 0 1em 0; text-align: center; }

.detailTitle__shares > div, .detailTitle__shares > div > ul > li {
    display: inline-block;
}

.detailTitle__shares > div {
    margin-bottom: -8px;
}

.detailTitle__shares > div > ul {
    display: table-row;
}

.detailTitle__shares > div > ul > li {
    display: table-cell;
    padding-left: 3px;
}
</style>
