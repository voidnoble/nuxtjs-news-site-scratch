<template>
    <ul class="HotRelArticleListDsp">
        <li v-for="row in rows" :key="row">
            <a :href="'/article/'+ row.gisano">{{ row.titleCut }}</a>
        </li>
    </ul>
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
        axios.get(this.apiDomain +'/api/v1/areas/article_HotRelArticleInfos')
            .then(response => {
                this.rows = [];
                response.data.forEach((row, i) => {
                    row.thumbUrl1 = helper.thumb_img(row.thumb_url, 0);
                    row.title = row.title.replace("[사진]", "");
                    row.titleCut = helper.truncate(row.title, 45);
                    row.contentCut = helper.truncate(helper.stripgiza(row.content), 10);
                    this.rows.push(row);
                });
            })
            .catch(e => {
                this.errors.push(e);
            });
    }
}
</script>
