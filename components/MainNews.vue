<template>
    <div class="new_main_bottom">
        <!-- Main News -->
        <div class="mainNews">
            <!-- Section1 -->
            <div v-if="rows0.length > 0 && rows1.length > 0" class="section1">
                <ul class="headline" style="width:100%;">
                    <li class="big"><a :href="'/article/'+ rows0[0].gisano">{{ rows0[0].title }}</a></li>
                    <li>{{ rows0[0].content_cut }}</li>
                </ul>
                <ul class="mainNewsList">
                    <li v-for="(row, index) in rows1" :key="index">
                        <a :href="'/article/'+ row.gisano">{{ row.title }}</a>
                    </li>
                </ul>
            </div>
            <!-- Section1 //-->
            
            <!-- Section2 -->
            <div v-if="rows0.length > 0 && rows2.length > 0" class="section2">
                <ul class="headline" style="width:100%;">
                    <li class="big"><a :href="'/article/'+ rows0[1].gisano">{{ rows0[1].title }}</a></li>
                    <li>{{ rows0[1].content_cut }}</li>
                </ul>
                <ul class="mainNewsList">
                    <li v-for="(row, index) in rows2" :key="index">
                        <a :href="'/article/'+ row.gisano">{{ row.title }}</a>
                    </li>
                </ul>
            </div>
            <!-- Section2 //-->
            
            <!-- Section3 -->
            <div v-if="rows0.length > 0 && rows3.length > 0" class="section3">
                <ul class="headline" style="width:100%;">
                    <li class="big"><a :href="'/article/'+ rows0[2].gisano">{{ rows0[2].title }}</a></li>
                    <li>{{ rows0[2].content_cut }}</li>
                </ul>
                <ul class="mainNewsList">
                    <li v-for="(row, index) in rows3" :key="index">
                        <a :href="'/article/'+ row.gisano">{{ row.title }}</a>
                    </li>
                </ul>
            </div><!-- Section3 //-->
        </div><!-- Main News //-->
    </div><!-- //new_main_bottom -->
</template>

<script>
import axios from "axios";
import helper from "~/plugins/helper";

export default {
    props: ['staticDomain', 'apiDomain'],
    data() {
        return {
            rows0: [],
            rows1: [],
            rows2: [],
            rows3: [],
            errors: []
        }
    },
    mounted() {
        axios.get(this.apiDomain +'/api/v1/areas/main_news1')
            .then(response => {
                this.rows0 = [];
                
                response.data.forEach((row, i) => {
                    row.title = row.title.replace("[사진]", "");
                    row.thumb_url1 = helper.thumb_img(row.thumb_url, 0);
                    row.title_cut = helper.truncate(row.title, 30);
                    row.content_cut = helper.truncate(helper.stripgiza(row.content), 65);

                    this.rows0.push(row);
                });
            })
            .catch(e => {
                this.errors.push(e);
            });
        
        axios.get(this.apiDomain +'/api/v1/areas/main_news2')
            .then(response => {
                let rows = [];
                this.rows1 = [];
                this.rows2 = [];
                this.rows3 = [];

                response.data.forEach((row, i) => {
                    row.title = row.title.replace("[사진]", "");
                    row.thumb_url1 = helper.thumb_img(row.thumb_url, 0);
                    row.title_cut = helper.truncate(row.title, 30);
                    row.content_cut = helper.truncate(helper.stripgiza(row.content), 65);
                    
                    rows.push(row);
                });

                this.rows1 = rows.slice(0, 5);
                this.rows2 = rows.slice(5, 10);
                this.rows3 = rows.slice(10);
            })
            .catch(e => {
                this.errors.push(e);
            });
    }
}
</script>

<style scoped>

</style>
