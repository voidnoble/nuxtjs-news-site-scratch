<template>
    <div id="footer">
        <ul class="footer__nav">
            <li>
                <router-link to="/pages/company">
                    <img :src="staticDomain +'/web2/images/common/tit_footer_link1.gif'" alt="회사소개" />
                </router-link>
            </li>
            <li>
                <router-link to="/pages/copyright">
                    <img :src="staticDomain +'/web2/images/common/tit_footer_link2.gif'" alt="저작권 규약" />
                </router-link>
            </li>
            <li>
                <router-link to="/pages/partnership">
                    <img :src="staticDomain +'/web2/images/common/tit_footer_link3.gif'" alt="기사구매 및 제휴문의" />
                </router-link>
            </li>
            <li>
                <router-link to="/pages/ad">
                    <img :src="staticDomain +'/web2/images/common/tit_footer_link4.gif'" alt="광고문의" />
                </router-link>
            </li>
            <li>
                <router-link to="/pages/map">
                    <img :src="staticDomain +'/web2/images/common/tit_footer_link5.gif'" alt="약도" />
                </router-link>
            </li>
        </ul>
        <h1 class="footer__logo">
            <img :src="staticDomain +'/web2/images/common/h1_footer_logo.gif'" alt="Logo" />
        </h1>
        <div class="footer__description">
            <address>서울시</address>
            <p>
            </p>
            <p class="footer__copyright">Copyright &copy; XXX All rights Reserved.</p>
        </div>
        <div class="footer__spc"></div>
    </div>
</template>

<script>
export default {
    props: ['staticDomain'],
}
</script>

