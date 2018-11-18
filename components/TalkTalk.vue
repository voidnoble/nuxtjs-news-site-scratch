<template>
    <!--  톡톡 -->
    <div class="Talk">
        <h4><img :src="staticDomain +'/web2/images/main/h4__talk.gif'" alt=" 톡톡" /></h4>
        <ul>
            <li v-for="row in rows.slice(0, 3)" :key="row">
                <h5>{{ row.t_name }}</h5>
                <p class="photo"><a :href="'/article/'+ row.gisano"><img :src="row.thumbUrl2" /></a></p>
                <p class="article"><a :href="'/article/'+ row.gisano"><big>{{ row.titleCut }}</big></a>
                {{ row.contentCut }}
                </p>
            </li>
        </ul>
    </div>
    <!--  톡톡 //-->
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
        axios.get(this.apiDomain +'/api/v1/areas/talktalk')
            .then(response => {
                this.rows = [];
                let t1 = "";
                
                response.data.forEach((row, i) => {
                    t1 = row.title.match(/\[([^\]]+)\]/gi);

                    if (t1.length > 1) {
                        row.t_name = t1[1];
                        tmp = row.t_name.split(" ");
                        tmp[0] += "<br />";
                        row.t_name = tmp.join('');
                        row.title = row.title.replace(t1[0], "");
                    } else {
                        row.t_name = " 톡톡";
                        row.title = row.title;
                    }
                    
                    row.thumbUrl2 = helper.thumb_img(row.thumb_url, 1);
                    row.titleCut = helper.truncate(row.title, 22);
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
