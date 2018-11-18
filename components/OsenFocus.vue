<template>
    <div v-if="rows" class="Focus">
        <h4><img :src="staticDomain +'/web2/images/main/h4__focus.gif'" alt=" FOCUS" /></h4>
        <ul>
            <li v-for="row in rows" :key="row">
                <a :href="'/article/'+ row.gisano"><img :src="row.thumbUrl1" /></a>
                <p>
                    <a :href="'/article/'+ row.gisano" class="title">{{ row.title }}</a><br />
                    {{ row.contentCut }}
                </p>
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
        }
    },
    mounted() {
        axios.get(this.apiDomain +'/api/v1/areas/_focus')
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
