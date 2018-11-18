<template>
    <!-- 자동차 -->
    <div class="carBox carBox02">
        <h5><img alt="자동차" :src="staticDomain +'/web2/images/life/h5_car.gif'" /></h5>
        <div id="slideCar">
            <div class="slides_container" style="margin-left:10px;">
                <div class="slide">
                    <div class="item" v-for="row in rows.slice(0, 2)" :key="row">
                        <a :href="'/article/'+ row.gisano"><img :src="row.thumbUrl1" /></a>
                        <p class="textView"><a :href="'/article/'+ row.gisano">{{ row.title }}</a></p>
                    </div>
                </div>
                <div class="slide">
                    <div class="item" v-for="row in rows.slice(2, 4)" :key="row">
                        <a :href="'/article/'+ row.gisano"><img :src="row.thumbUrl1" /></a>
                        <p class="textView"><a :href="'/article/'+ row.gisano">{{ row.title }}</a></p>
                    </div>
                </div>
                <div class="slide">
                    <div class="item" v-for="row in rows.slice(4, 6)" :key="row">
                        <a :href="'/article/'+ row.gisano"><img :src="row.thumbUrl1" /></a>
                        <p class="textView"><a :href="'/article/'+ row.gisano">{{ row.title }}</a></p>
                    </div>
                </div>
                <div class="slide">
                    <div class="item" v-for="row in rows.slice(6, 8)" :key="row">
                        <a :href="'/article/'+ row.gisano"><img :src="row.thumbUrl1" /></a>
                        <p class="textView"><a :href="'/article/'+ row.gisano">{{ row.title }}</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div><!-- 자동차 -->
</template>

<script>
import axios from "axios";
import helper from "~/plugins/helper";

export default {
    props: ['staticDomain', 'apiDomain'],
    data() {
        return {
            rows: [],
            errors: []
        }
    },
    mounted() {
        axios.get(this.apiDomain +'/api/v1/areas/car')
            .then(response => {
                this.rows = [];
                response.data.forEach((row, i) => {
                    row.thumbUrl1 = helper.thumb_img(row.thumb_url, 0);
                    row.title = row.title.replace("[사진]", "");
                    row.contentCut = helper.truncate(helper.stripgiza(row.content), 40);
                    this.rows.push(row);
                });
                this.rows.sort(() => 0.5 - Math.random());   // suffle
   
                $('#slideCar').slides({
                    preload: false,
                    preloadImage: this.staticDomain +'/web2/images/common/loading.gif',
                    play: 0,
                    pause: 2500,
                    generatePagination: true,
                    generateNextPrev: false,
                    hoverPause: true
                });

                $('#slideCar .slides_control').css('height', '145px');
            })
            .catch(e => {
                this.errors.push(e);
                if (this.errors.length > 0) console.error(this.errors);
            });
    }
}
</script>

<style>
#slideCar .slides_container .item .textView {
    margin-top: 0;
}
</style>
