<template>
    <!--  포토슬라이드 -->
    <div class="PhotoSlide">
        <h4><img :src="staticDomain +'/web2/images/main/h4__photoslide.gif'" alt=" 포토슬라이드" /></h4>
        <ul>
            <li v-for="row in rows" :key="row">
                <a :href="'/photo/slide_view/'+ row.gisano">
                    <img :src="row.thumbUrl1" alt="" /><br />
                    {{ row.titleCut }}
                </a>
            </li>
        </ul>
    </div>
    <!--  포토슬라이드 //-->
</template>

<script>
import axios from "axios";
import helper from "~/plugins/helper";

export default {
    props: ['staticDomain', 'apiDomain', 'sliceEnd'],
    data() {
        return {
            rows: [],
            errors: []
        }
    },
    mounted() {
        axios.get(this.apiDomain +'/api/v1/areas/photoslide')
            .then(response => {
                this.rows = [];
                response.data.forEach((row, i) => {
                    row.thumbUrl1 = helper.thumb_img(row.thumb_url, 0);
                    row.title = row.title.replace("[사진]", "");
                    row.titleCut = helper.truncate(row.title, 18);
                    row.contentCut = helper.truncate(helper.stripgiza(row.content), 40);
                    this.rows.push(row);
                });
                this.rows.splice(this.sliceEnd);    // rows count limit
            })
            .catch(e => {
                this.errors.push(e);
            });
    }
}
</script>
