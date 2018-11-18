<template>
    <div class="subWithStarBox">
        <div class="subWithStar subWithStar300">
            <p class="photo">
                <a :href="'/article/'+ row.gisano">
                    <img :src="row.thumbUrl1" alt="" />
                </a>
                <span class="tag"><img :src="staticDomain +'/web2/images/entertainment/tag_star.gif'" alt="With Star" /></span>
            </p>
            <p class="article">
                <a :href="'/article/'+ row.gisano"><big>{{ row.title }}</big></a>
                {{ row.contentCut }}
            </p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import helper from "~/plugins/helper";

export default {
    props: ['staticDomain', 'apiDomain'],
    data() {
        return {
            row: {},
            rows: [],
            errors: []
        }
    },
    mounted() {
        axios.get(this.apiDomain +'/api/v1/areas/coffee')
            .then(response => {
                this.rows = [];
                response.data.forEach((row, i) => {
                    row.thumbUrl1 = helper.thumb_img(row.thumb_url, 1);
                    row.title = row.title.replace("[사진]", "");
                    row.contentCut = helper.truncate(helper.stripgiza(row.content), 50);
                    this.rows.push(row);
                });
                this.row = this.rows[0];
            })
            .catch(e => {
                this.errors.push(e);
                if (this.errors.length > 0) console.error(this.errors);
            });
    }
}
</script>

<style>
.subWithStarBox {
    margin-bottom:0;padding-bottom:0;
}

.subWithStarBox > .subWithStar > .photo {
    height: 205px;
}
</style>
