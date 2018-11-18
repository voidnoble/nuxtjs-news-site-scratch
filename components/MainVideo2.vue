<template>
    <!-- 영상2 -->
    <div class="Photo main-video">
        <h4 class="main-video__title"><span class="highlight">Oh!</span> 모션</h4>
        <ul class="main-video__items">
            <li v-for="row in rows.slice(0, 2)" :key="row" class="main-video__item">
                <p class="title"><a :href="'/story/'+ row.idx">{{ row.titleCut }}</a></p>
                <a :href="'/story/'+ row.idx" class="videos__img">
                    <img :src="staticDomain +'/story/3/'+ row.img" width="100%" />
                    <div class="play-button-outer"><div class="play-button"></div></div>
                </a>
            </li>
        </ul>
    </div>
    <!-- /영상2 -->
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
        axios.get(this.apiDomain +'/api/v1/areas/main_video2')
            .then(response => {
                this.rows = [];
                response.data.forEach((row, i) => {
                    row.title = row.title.replace("[Oh! 모션]", "");
                    row.titleCut = helper.truncate(row.title, 26);
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
