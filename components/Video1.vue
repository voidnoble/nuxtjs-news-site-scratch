<template>
    <!-- 영상1 - Oh!모션 -->
    <div class="videos">
        <h3><span class="highlight">Oh!</span> 모션</h3>
        <a v-for="row in rows" :key="row" :href="'/story/'+ row.idx" class="videos__link">
            <div class="videos__img">
                <img :src="staticDomain +'/story/1/'+ row.img" alt="영상 커버이미지">
                <div class="play-button-outer"><div class="play-button"></div></div>
            </div>
            <h4 class="videos__title">{{ row.title }}</h4>
            <div class="videos__caption">{{ row.captionCut }}</div>
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
                    row.title = row.title.replace('[Oh!모션]', '');
                    row.titleCut = helper.truncate(row.title, 100);
                    row.captionCut = helper.truncate(row.caption, 65);
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
