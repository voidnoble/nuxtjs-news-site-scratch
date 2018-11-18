<template>
    <div class="photoShot">
        <h5><img :src="staticDomain +'/web2/images/entertainment/h5__shot.gif'" alt=" 포토 샷!" /></h5>
        <ul>
            <li v-for="row in rows" :key="row">
                <a :href="'/article/'+ row.gisano"><img :src="row.thumbUrl1" /></a>
                <p><a :href="'/article/'+ row.gisano">{{ row.title }}</a></p>
            </li>
        </ul>
    </div>
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
        axios.get(this.apiDomain +'/api/v1/areas/photonews')
            .then(response => {
                this.rows = [];
                response.data.forEach((row, i) => {
                    row.thumbUrl1 = helper.thumb_img(row.thumb_url, 1);
                    row.title = row.title.replace("[사진]", "");
                    row.titleCut = helper.truncate(row.title, 45);
                    //row.contentCut = helper.truncate(helper.stripgiza(row.content), 10);
                    this.rows.push(row);
                });
            })
            .catch(e => {
                this.errors.push(e);
            });
    }
}
</script>
