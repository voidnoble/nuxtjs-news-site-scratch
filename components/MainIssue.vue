<template>
    <!--  이슈&이슈 -->
    <div v-if="rows.length > 0" class="Issue">
        <h4><img :src="staticDomain +'/web2/images/main/h4__issue.gif'" alt=" 이슈&amp;이슈" /></h4>
        <p class="article">
            <a :href="'/article/'+ rows[0].gisano"><img :src="rows[0].thumbUrl" class="thumb" alt="" /></a>
            <a :href="'/article/'+ rows[0].gisano"><strong class="title">{{ rows[0].titleCut }}</strong></a><br />
            {{ rows[0].contentCut }}
        </p>
        
        <ul class="DeskList">
            <li v-for="row in rows.slice(1, 5)" :key="row">
                <a :href="'/article/'+ row.gisano">{{ row.titleCut }}</a>
            </li>
        </ul>
    </div>
    <!--  이슈&이슈 //-->
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
        axios.get(this.apiDomain +'/api/v1/areas/main_issue')
            .then(response => {
                this.rows = [];
                response.data.forEach((row, i) => {
                    row.thumbUrl = helper.url(row.original_img, "120x68");
                    row.title = row.title.replace("[사진]", "");
                    row.titleCut = helper.truncate(row.title, 30);
                    row.contentCut = helper.truncate(helper.stripgiza(row.content), 30);
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
