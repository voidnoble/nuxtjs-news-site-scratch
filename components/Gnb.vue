<template>
    <!-- GNB -->
    <div id="mainNavigation">
        <ul class="gnb">
            <li>
                <router-link to="/entertainment"><img :src="staticDomain +'/web2/images/common/gnb1_off.gif'" alt="엔터테인먼트"></router-link>
                <ul style="display: none;">
                    <li><router-link to="/entertainment/movie"><img :src="staticDomain +'/web2/images/common/gnb1_1_off.gif'" alt="영화"></router-link></li>
                    <li><router-link to="/entertainment/music"><img :src="staticDomain +'/web2/images/common/gnb1_2_off.gif'" alt="음악"></router-link></li>
                    <li><router-link to="/entertainment/broadcast"><img :src="staticDomain +'/web2/images/common/gnb1_3_off.gif'" alt="방송"></router-link></li>
                    <li><router-link to="/entertainment/coffee"><img :src="staticDomain +'/web2/images/common/gnb1_4_off.gif'" alt="커피한잔"></router-link></li>
                    <li><router-link to="/entertainment/gossip"><img :src="staticDomain +'/web2/images/common/gnb1_5_off.gif'" alt="뒷담화"></router-link></li>
                    <li><router-link to="/entertainment/enterinside"><img :src="staticDomain +'/web2/images/common/gnb1_6_off.gif'" alt="연예 인사이드"></router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="/probaseball"><img :src="staticDomain +'/web2/images/common/gnb_probaseball_off.gif'" alt="프로야구"></router-link>
            </li>
            <li>
                <router-link to="/baseball/overseas"><img :src="staticDomain +'/web2/images/common/gnb_overseasbaseball_off.gif'" alt="해외야구"></router-link>
            </li>
            <li>
                <router-link to="/sports"><img :src="staticDomain +'/web2/images/common/gnb3_off.gif'" alt="스포츠"></router-link>
                <ul style="display: none;">
                    <li><router-link to="/sports/domesticfootball"><img :src="staticDomain +'/web2/images/common/gnb3_1_off.gif'" alt="국내축구"></router-link></li>
                    <li><router-link to="/sports/overseasfootball"><img :src="staticDomain +'/web2/images/common/gnb3_2_off.gif'" alt="해외축구"></router-link></li>
                    <li><router-link to="/sports/basketball"><img :src="staticDomain +'/web2/images/common/gnb3_3_off.gif'" alt="농구/배구"></router-link></li>
                    <li><router-link to="/sports/golf"><img :src="staticDomain +'/web2/images/common/gnb3_4_off.gif'" alt="골프/일반"></router-link></li>
                    <li><router-link to="/sports/sportsinside"><img :src="staticDomain +'/web2/images/common/gnb3_5_off.gif'" alt="스포츠 인사이드"></router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="/photo"><img :src="staticDomain +'/web2/images/common/gnb4_off.gif'" alt="포토"></router-link>
                <ul style="display: none;">
                    <li><router-link to="/photo/news"><img :src="staticDomain +'/web2/images/common/gnb4_1_off.gif'" alt="포토뉴스"></router-link></li>
                    <li><router-link to="/photo/slide"><img :src="staticDomain +'/web2/images/common/gnb4_2_off.gif'" alt="포토슬라이드"></router-link></li>
                    <li><router-link to="/photo/gallery"><img :src="staticDomain +'/web2/images/common/gnb4_3_off.gif'" alt="포토갤러리"></router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="/life"><img :src="staticDomain +'/web2/images/common/gnb5_off.gif'" alt="라이프"></router-link>
                <ul style="left: -150px; display: none;">
                    <li><router-link to="/life/culture"><img :src="staticDomain +'/web2/images/common/gnb5_1_off.gif'" alt="문화/공연"></router-link></li>
                    <li><router-link to="/life/car"><img :src="staticDomain +'/web2/images/common/gnb5_2_off.gif'" alt="자동차"></router-link></li>
                    <li><router-link to="/life/travel"><img :src="staticDomain +'/web2/images/common/gnb5_3_off.gif'" alt="여행/레저"></router-link></li>
                    <li><router-link to="/life/taste"><img :src="staticDomain +'/web2/images/common/gnb5_4_off.gif'" alt="맛"></router-link></li>
                    <li><router-link to="/life/book"><img :src="staticDomain +'/web2/images/common/gnb5_5_off.gif'" alt="책"></router-link></li>
                    <li><router-link to="/life/life"><img :src="staticDomain +'/web2/images/common/gnb5_6_off.gif'" alt="생활일반"></router-link></li>
                    <li><router-link to="/life/style"><img :src="staticDomain +'/web2/images/common/gnb5_7_off.gif'" alt="스타일"></router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="/game"><img :src="staticDomain +'/web2/images/common/gnb6_off.gif'" alt="게임"></router-link>
                <ul style="display: none;">
                    <li><router-link to="/game/esports"><img :src="staticDomain +'/web2/images/common/gnb6_1_off.gif'" alt="e스포츠/게임"></router-link></li>
                    <li><router-link to="/game/it"><img :src="staticDomain +'/web2/images/common/gnb6_2_off.gif'" alt="IT산업"></router-link></li>
                </ul>
            </li>
            <li class="gnb__toto txt">
                <router-link to="/toto">토토</router-link>
            </li>
            <li class="gnb__toon txt">
                <router-link to="/video">영상</router-link>
                <div class="gnb__decoration"><img :src="staticDomain +'/web2/images/common/addi_1.gif'"></div>
            </li>
            <li class="all_news"><!-- 1005 추가 -->
                <router-link to="/all"><img :src="staticDomain +'/web2/images/common/all_news.png'" alt="전체기사 보기"></router-link>
            </li><!-- //1005 추가 끝 -->
        </ul>
    </div><!-- /GNB -->
</template>

<script>
export default {
    props: ['staticDomain'],
    data() {
        return {
            //staticDomain: process.env.staticDomain,
        }
    }
}
</script>
