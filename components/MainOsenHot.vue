<template>
    <div v-if="rows" class="Hot">
        <h4><img :src="staticDomain +'/web2/images/main/h4__hot.gif'" alt=" 핫!!!" /></h4>
        <ul>
            <li v-for="row in rows" :key="row">
                <a :href="'/photo/slide_view/'+ row.gisano">
                    <img :src="row.thumbUrl1" />
                </a>
                <p><a :href="'/photo/slide_view/'+ row.gisano">{{ row.title }}</a></p>
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
        axios.get(this.apiDomain +'/api/v1/areas/_hot')
            .then(response => {
                this.rows = [];
                response.data.forEach((row, i) => {
                    row.thumbUrl1 = helper.thumb_img(row.thumb_url, 0);
                    row.title = row.title.replace("[사진]", "");
                    row.contentCut = helper.truncate(helper.stripgiza(row.content), 40);
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