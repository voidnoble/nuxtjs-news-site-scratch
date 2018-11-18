<template>
    <!-- 영상1 - Oh!모션 -->
    <div class="Flash videos">
        <h5><span class="highlight"> FLASH</span></h5>
        <hr class="videos__head-decoration--line">
        <h3>Oh! 모션</h3>
        <a v-for="row in rows" :key="row" :href="'/story/'+ row.idx" class="videos__link">
            <div class="photo videos__img">
                <img :src="staticDomain +'/story/1/'+ row.img">
                <div class="play-button-outer"><div class="play-button"></div></div>
            </div>
            <div class="videos__title">{{ row.title }}</div>
            <div class="videos__caption">{{ row.caption }}</div>
        </a>
    </div>
    <!-- /영상1 - Oh!모션 -->
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
        axios.get(this.apiDomain +'/api/v1/areas/main_video1')
            .then(response => {
                this.rows = [];
                response.data.forEach((row, i) => {
                    row.titleCut = helper.truncate(row.title, 100);
                    row.captionCut = helper.truncate(row.caption, 35);
                    this.rows.push(row);
                });
            })
            .catch(e => {
                this.errors.push(e);
                if (this.errors.length > 0) console.error(this.errors);
            });
    }
}
</script>
