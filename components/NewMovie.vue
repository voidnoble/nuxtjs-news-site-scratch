<template>
    <div class="new-movie__container">
        <!-- 새영화 -->
        <div class="newMovie">
            <h5><img :src="staticDomain +'/web2/images/entertainment/h5_new_movie.gif'" alt="새영화" /></h5>
            <div id="bannerArea3">
                <div class="slides_container">
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
                </div>
            </div>
        </div>
        <!-- /새영화 -->
    </div>
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
        axios.get(this.apiDomain +'/api/v1/areas/newmovie')
            .then(response => {
                this.rows = [];
                response.data.forEach((row, i) => {
                    row.thumbUrl1 = helper.thumb_img(row.thumb_url, 0);
                    row.title = row.title.replace("[사진]", "");
                    row.contentCut = helper.truncate(helper.stripgiza(row.content), 40);
                    this.rows.push(row);
                });
                this.rows.sort(() => 0.5 - Math.random());   // suffle

                $('#bannerArea3').slides({
                    preload: false,
                    preloadImage: this.staticDomain +'/web2/images/common/loading.gif',
                    play: 0,
                    pause: 2500,
                    generatePagination: true,
                    generateNextPrev: false,
                    hoverPause: true
                });

                $('#bannerArea3 .slides_control').css('height', '253px');
            })
            .catch(e => {
                this.errors.push(e);
                if (this.errors.length > 0) console.error(this.errors);
            });
    }
}
</script>

<style>
.new-movie__container {
    padding:10px;margin-bottom:10px;
}

#bannerArea3 .slides_container .item .textView {
    margin-top: 5px;
}
</style>
