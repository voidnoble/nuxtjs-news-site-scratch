<template>
    <div class="sports">
        <div class="sports_txt">                    
            <dl v-for="(row, index) in rows.slice(0, 3)" :key="index" class="news_list">
                <dt><a :href="'/article/'+ row.gisano"><img :src="row.thumb_url1" /></a></dt>
                <dd class="txt_title"><a :href="'/article/'+ row.gisano">{{row.title_cut}}</a></dd>
                <dd class="txt_content">{{row.content_cut}}</dd>
            </dl>
        </div><!-- //sports_txt -->
        <div class="headline_txt">
            <ul>
                <li v-for="(row, index) in rows.slice(3)" :key="index">
                    <a :href="'/article/'+ row.gisano">{{row.title}}</a>
                </li>
            </ul>
        </div><!-- //headline_txt -->
    </div><!-- //sports -->
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
        axios.get(this.apiDomain +'/api/v1/areas/main_sports_new')
            .then(response => {
                this.rows = [];
                response.data.forEach((row, i) => {
                    row.thumb_url1 = helper.thumb_img(row.thumb_url, 0);
                    row.title_cut = helper.truncate(row.title, 40);
                    row.content_cut = helper.truncate(helper.stripgiza(row.content), 40);
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

<style scoped>

</style>