<template>
    <div class="focus">
        <div class="focus_photo">
            <dl v-for="(row, index) in rows" :key="index" class="news_list" :style="{'padding-bottom': (index == 3)? 0 : ''}">
                <dt><a :href="'/article/'+ row.gisano"><img :src="row.thumb_url1" /></a></dt>
                <dd class="txt_title"><a :href="'/article/'+ row.gisano">{{ row.title_cut }}</a></dd>
                <dd class="txt_content">{{ row.content_cut }}</dd>
            </dl>
        </div><!-- //focus_photo -->
    </div><!-- //focus -->
</template>

<script>
import axios from "axios";
import helper from "~/plugins/helper";

export default {
    name: "MainTopNews",
    props: ['staticDomain', 'apiDomain'],
    data() {
        return {
            rows: [],
            errors: []
        }
    },
    // Fetches posts when the component is created.
    mounted() {
        axios.get(this.apiDomain +'/api/v1/areas/main_topnews_new')
            .then(response => {
                this.rows = [];
                response.data.forEach((row, i) => {
                    row.thumb_url1 = helper.thumb_img(row.thumb_url, 0);
                    row.title_cut = helper.truncate(row.title, 30);
                    row.content_cut = helper.truncate(helper.stripgiza(row.content), 40);
                    this.rows.push(row);
                });
            })
            .catch(e => {
                this.errors.push(e);
                if (this.errors.length > 0) console.error(this.errors);
            });
    },
    methods: {
    }
}
</script>

<style scoped>

</style>
