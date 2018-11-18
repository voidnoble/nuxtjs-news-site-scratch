<template>
    <div>
        <div id="gnb">
            <table id="gnbTb" style="width:100%;">
            <tbody>
            <tr>
                <td style="width:420px;">
                    <h1>
                        <router-link to="/"><img :src="staticDomain +'/web2/images/common/h1_.gif'" alt="" /></router-link>
                    </h1>
                </td>
                <td style="vertical-align:bottom; padding-bottom:3px; padding-right:5px; text-align:right;"></td>
                <td style="width:315px; vertical-align:top" class="gnb__search-box"><search-box /></td>
            </tr>
            </tbody>
            </table>
        </div>

        <div v-if="!ad_fix">
            <div v-if="showShapeBan">
                <script type="text/javascript" v-html="shapeBanScript"></script>
            </div>
            
            <!-- 우측 최상단 삼각배너 --><script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script><ins class="adsbyadop" _adop_zon="07df4f84-0fde-412e-8e31-73740b381ff6" _adop_type="re" style="display: block;width:180px;height:180px;position: absolute;top: 0;right: 0;z-index: 10000;" _page_url=""></ins><!-- /우측 최상단 삼각배너 -->
        </div>
    </div>
</template>

<script>
import SearchBox from "~/components/SearchBox.vue";

export default {
    props: ['staticDomain'],
    data() {
        return {
            // staticDomain: process.env.staticDomain,
            ad_fix: false,
            showShapeBan: false,
            shapeBanScript: `function open_win() {
                if (TiBannerCookie == "") return;

                var cnt = 0;
                var onloadCookie = TiBannerCookie;

                var overCookie = TiBannerCookie +'_sub';

                //마우스 오버시
                if (strSSOGubun == 'yes') {
                    cnt = getCookie(overCookie);
                    maxcnt = 2;
                }
                //페이지 로드시
                else {
                    cnt = getCookie(onloadCookie);
                    maxcnt = TiBannerCnt;
                    if (maxcnt <= 0 || maxcnt == '') maxcnt = 1;
                }

                //로딩 카운트
                if (cnt == 0 || cnt == "" || cnt == null) cnt = 1;

                if (isNaN(cnt)) cnt = 1;

                cnt = parseInt(cnt);
                maxcnt = parseInt(maxcnt);

                if (cnt <= maxcnt) {
                    cnt += 1;

                    //마우스 오버시
                    if (strSSOGubun == 'yes') {
                        setCookie(overCookie, cnt, 60 * 30);
                    }
                    //페이지 로드시
                    else {
                        setCookie(onloadCookie, cnt, 60 * 30);
                    }

                    document.getElementById("TI_BANNER").style.display = 'block';
                } else {
                    return;
                }
            }

            function close_win() {
                document.getElementById("TI_BANNER").style.display = 'none';
            }
        
            var TiBannerCookie = "_20140409"; //팝업 쿠키 변수

            var TiBannerCnt = 5; //로딩시 팝업 횟수
            var strSSOGubun = "";

            jQuery(function() {
                // 플로팅배너 호출(미사용으로 주석처리)
                //open_win();
            });`,
        }
    },
    components: {
        SearchBox,
    }
}
</script>


<style type="text/css">
    #gnbTb {
        margin: 0px;
    }

    #loginDetailDsp {
        display: none;
    }
</style>