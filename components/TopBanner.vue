<template>
    <div class="topBanner">
        <script src="http://compass.adop.cc/assets/js/adop/adopJ.js?v=14"></script><ins class="adsbyadop" _adop_zon="39d52719-f324-4f77-b8c1-8fd67abd552d" _adop_type="re" style="display:inline-block;width:728px;height:90px;" _page_url=""></ins>
        <img id="topBanner_close" style="position:absolute;clear:both;left:50%;top:65px;margin-left:365px;" :src="staticDomain +'/web2/images/common/ad_close_btn.gif'" alt="close" />

        <script type="text/javascript" v-html="topBannerScript"></script>
    </div>
</template>

<script>
export default {
    data() {
        return {
            staticDomain: process.env.staticDomain,
            topBannerScript: `function showFlash(src, w, h, id, linkUrl) {
                    document.write(getFlashHtml(src, w, h, id, linkUrl));
                }

                function getFlashHtml(src, w, h, id, linkUrl) {
                    if ( !id ) {
                        id = '';
                    }

                    var str = "";
                    str  = '<object id="' + id + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="' + w + '" height="' + h + '">';
                    str += '<param name="movie" value="' + src + '" />';
                    str += '<param name="quality" value="high" />';
                    str += '<param name="wmode" value="transparent" />';
                    str += '<embed wmode="transparent" src="' + src + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + w + '" height="' + h + '"></embed>';
                    str += '</object>';

                    if (linkUrl) {
                        str = '<div style="position:relative; display:inline-block; width:auto;"><div onclick="window.open(\\'' + linkUrl + '\\', \\'\\', \\'\\');" style="cursor:pointer; background-image:url(<?=FILE?>/web2/images/bg/bg_white_tran_100_per.png); position:absolute; left:0px; top:0px; width:' + w + 'px; height:' + h + 'px;"></div>' + str + '</div>';
                    }

                    return str;
                }

                function hideTopBanner() {
                    jq__slideUpAndRemove($('.topBanner'));
                }

                function jq__slideUpAndRemove($obj) {
                    if ( !isMsIe() || isMsIe11() ) {
                        $obj.slideUp(function() {
                            $obj.remove();
                        });
                    } else {
                        $obj.remove();
                    }
                }

                function isMsIe() {
                    if ($.browser.msie) {
                        return true;
                    }
                    return false;
                }

                function isMsIe11() {
                    if ( parseInt($.browser.version) == 11 ) {
                        return true;
                    }
                    return false;
                }

                $(document).ready(function() {
                    // 헤더 위 최상단 배너 닫기버튼 클릭시
                    $('#topBanner_close').on('click',function() {
                        // 최상단 배너 닫기 전 상태 정보 변수에 할당
                        var topBannerHeight = $('.topBanner').height();

                        // 기사 본문 이미지#1 위 ad.ad4989.co.kr 배너 position top 기억
                        try {
                            var ad4989OffsetTop = $('#mask.mask_div').last().offset().top;
                        } catch(e) {}

                        // 최상단 배너 닫기
                        $('#topBanner_close').hide();
                        hideTopBanner();

                        // 기사 본문 이미지#1 위 ad.ad4989.co.kr 배너 position top 업데이트
                        try {
                            $('#mask.mask_div').last().css({ top: ad4989OffsetTop - topBannerHeight });
                        } catch(e) {}
                    });
                });`,
        }
    }
}
</script>
