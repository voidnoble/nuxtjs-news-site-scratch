<template>
    <div class="headline">
        <div class="headline_photo">
            <div class="headline_photo_nav">
                <ul>
                    <li class="nomber" id="h_num_area">1/<span>3</span></li>
                    <li class="prev"><a href="#" onClick="goto_tab(h_idx-1);return false;">이전</a></li>
                    <li class="next"><a href="#" onClick="goto_tab(h_idx+1);return false;">다음</a></li>
                </ul>
            </div><!-- //headline_photo_nav -->
            <dl v-for="(row, index) in rows" :key="index" class="news_list" :style="{display: (index > 0)? 'none;' : 'block' }">
                <dt><a :href="'/article/'+ row.gisano"><img :src="row.thumb_url1" /></a></dt>
                <dd class="txt_title"><a :href="'/article/'+ row.gisano">{{row.title_cut}}</a></dd>
                <dd class="txt_content">{{row.content_cut}}</dd>
            </dl>
        </div><!-- //headline_photo -->
    </div><!-- //headline -->
</template>

<script>
import axios from "axios";
import helper from "~/plugins/helper";

export default {
    name: "MainHeadline",
    props: ['staticDomain', 'apiDomain'],
    data() {
        return {
            rows: [],
            errors: []
        }
    },
    mounted() {
        axios.get(this.apiDomain +'/api/v1/areas/main_headline_new')
            .then((response) => {
                this.rows = [];
                response.data.forEach(row => {
                    row.thumb_url1 = helper.thumb_img(row.thumb_url, 0);
                    row.title_cut = helper.truncate(row.title, 40);
                    row.content_cut = helper.truncate(helper.stripgiza(row.content), 35);
                    this.rows.push(row);
                });
            })
            .catch(e => {
                this.errors.push(e);
                if (this.errors.length > 0) console.error(this.errors);
            });
    },
    methods: {}
}
</script>

<style scoped>

</style>

