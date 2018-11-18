<template>
    <!--  주요뉴스 -->
    <div class="majorNews" style="padding-top:20px;">
        <h5><img :src="staticDomain +'/web2/images/entertainment/h5_main_news.gif'" alt=" 주요뉴스" /></h5>
        <ul>
            <li v-for="row in rows" :key="row">
                <a :href="'/article/'+ row.gisano">{{ row.title.replace("[사진]", "") }}</a>
            </li>
        </ul>
    </div>
    <!--  주요뉴스 //-->
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
    async mounted() {
        let main_headline_new = await axios.get(this.apiDomain +'/api/v1/areas/main_headline_new');
        let main_topnews_new = await axios.get(this.apiDomain +'/api/v1/areas/main_topnews_new');
        let main_sports_new = await axios.get(this.apiDomain +'/api/v1/areas/main_sports_new');
        let main_news1 = await axios.get(this.apiDomain +'/api/v1/areas/main_news1');

        this.rows = [...main_headline_new.data.slice(0, 3), ...main_topnews_new.data.slice(0, 4), ...main_sports_new.data.slice(0, 9), ...main_news1.data.slice(0, 2)];
    }
}
</script>
