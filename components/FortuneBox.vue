<template>
    <!-- 오늘의 띠별운세 -->
    <div class="fortuneBox">
        <h1><img alt="김준구의 휴먼멘토링-오늘의 띠별 운세" :src="staticDomain +'/web2/images/entertainment/h5_today_fortune.gif'" /></h1>
        <ul>
            <li><a href="/life/mentoring/" :title="fortune['f1']"><img alt="쥐띠" :src="staticDomain +'/web2/images/entertainment/img_zodiac1.gif'" /></a><p>쥐띠</p></li>
            <li><a href="/life/mentoring/" :title="fortune['f2']"><img alt="소띠" :src="staticDomain +'/web2/images/entertainment/img_zodiac2.gif'" /></a><p>소띠</p></li>
            <li><a href="/life/mentoring/" :title="fortune['f3']"><img alt="호랑이띠" :src="staticDomain +'/web2/images/entertainment/img_zodiac3.gif'" /></a><p>호랑이띠</p></li>
            <li><a href="/life/mentoring/" :title="fortune['f4']"><img alt="토끼띠" :src="staticDomain +'/web2/images/entertainment/img_zodiac4.gif'" /></a><p>토끼띠</p></li>
            <li><a href="/life/mentoring/" :title="fortune['f5']"><img alt="용띠" :src="staticDomain +'/web2/images/entertainment/img_zodiac5.gif'" /></a><p>용띠</p></li>
            <li><a href="/life/mentoring/" :title="fortune['f6']"><img alt="뱀띠" :src="staticDomain +'/web2/images/entertainment/img_zodiac6.gif'" /></a><p>뱀띠</p></li>
            <li><a href="/life/mentoring/" :title="fortune['f7']"><img alt="말띠" :src="staticDomain +'/web2/images/entertainment/img_zodiac7.gif'" /></a><p>말띠</p></li>
            <li><a href="/life/mentoring/" :title="fortune['f8']"><img alt="양띠" :src="staticDomain +'/web2/images/entertainment/img_zodiac8.gif'" /></a><p>양띠</p></li>
            <li><a href="/life/mentoring/" :title="fortune['f9']"><img alt="원숭이띠" :src="staticDomain +'/web2/images/entertainment/img_zodiac9.gif'" /></a><p>원숭이띠</p></li>
            <li><a href="/life/mentoring/" :title="fortune['f10']"><img alt="닭띠" :src="staticDomain +'/web2/images/entertainment/img_zodiac10.gif'" /></a><p>닭띠</p></li>
            <li><a href="/life/mentoring/" :title="fortune['f11']"><img alt="개띠" :src="staticDomain +'/web2/images/entertainment/img_zodiac11.gif'" /></a><p>개띠</p></li>
            <li><a href="/life/mentoring/" :title="fortune['f12']"><img alt="돼지띠" :src="staticDomain +'/web2/images/entertainment/img_zodiac12.gif'" /></a><p>돼지띠</p></li>
        </ul>
    </div>
    <!-- 오늘의 띠별운세 //-->
</template>

<script>
import axios from "axios";
import helper from "~/plugins/helper";

export default {
    props: ['staticDomain', 'apiDomain', 'sliceEnd'],
    data() {
        return {
            rows: [],
            errors: []
        }
    },
    mounted() {
        axios.get(this.apiDomain +'/api/v1/areas/fortune')
            .then(response => {
                this.rows = [];
                response.data.forEach((row, i) => {
                    row.thumbUrl4 = helper.thumb_img(row.thumb_url, 4);
                    row.title = row.title.replace("[사진]", "");
                    row.titleCut = helper.truncate(row.title, 15);
                    row.contentCut = helper.truncate(helper.stripgiza(row.content), 10);
                    this.rows.push(row);
                });
                this.rows.splice(this.sliceEnd);    // rows count limit
                this.rows.sort(() => 0.5 - Math.random()); // like php's shuffle()
            })
            .catch(e => {
                this.errors.push(e);
            });
    }
}
</script>
