<template>
    <!--  INSIDE -->
    <div class="InsideBox">
        <h5><img :src="staticDomain +'/web2/images/entertainment/h5__inside.gif'" alt=" 인사이드" /></h5>
        <!-- tab -->
        <div class="tabArea1">
            <ul class="tabLink">
                <li><img alt="연예" :src="staticDomain +'/web2/images/entertainment/tab_inside1_on.gif'"/></li>
                <li><img alt="야구" :src="staticDomain +'/web2/images/entertainment/tab_inside2_off.gif'"/></li>
                <li><img alt="스포츠" :src="staticDomain +'/web2/images/entertainment/tab_inside3_off.gif'"/></li>
            </ul>
            <div v-for="(tab, tabId, i) in tabs" :key="i" class="tabView" :title="i" :style="{ display: ((i == 0)? 'block' : 'none') }">
                <ul v-if="tabs[tabId].rows.length > 0">
                    <li v-for="row in tabs[tabId].rows.slice(0, 3)" :key="row">
                        <a :href="'/article/'+ row.gisano" class="thumb"><img :src="row.thumb" alt=""/></a>
                        <div class="thumbView">
                            <p class="sbj"><a :href="'/article/'+ row.gisano">{{ row.titleCut }}</a></p>
                            <p class="textView" v-html="row.contentCut.trim()"></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- tab //-->
    </div>
    <!--  INSIDE //-->
</template>

<script>
import axios from "axios";
import helper from "~/plugins/helper";

export default {
    props: ['staticDomain', 'apiDomain'],
    data() {
        return {
            tabs: {
                entertainment: {
                    name: "연예",
                    rows: []
                }, 
                baseball: {
                    name: "야구",
                    rows: []
                }, 
                sports: { 
                    name: "스포츠",
                    rows: []
                }
            },
            errors: [],
        }
    },
    async mounted() {
        let response;
        
        try {
            response = await axios.get(this.apiDomain +'/api/v1/areas/inside_enter');
            response.data.forEach((row, i) => {
                row.thumb = helper.url(row.original_img, "120x68");
                row.title = row.title.replace("[사진]", "");
                row.titleCut = helper.truncate(helper.stripgiza(row.title), 15);
                row.contentCut = helper.truncate(helper.stripgiza(row.content), 45);
                this.tabs.entertainment.rows.push(row);
            });
            
            response = await axios.get(this.apiDomain +'/api/v1/areas/inside_baseball');
            response.data.forEach((row, i) => {
                row.thumb = helper.url(row.original_img, "120x68");
                row.title = row.title.replace("[사진]", "");
                row.titleCut = helper.truncate(helper.stripgiza(row.title), 15);
                row.contentCut = helper.truncate(helper.stripgiza(row.content), 45);
                this.tabs.baseball.rows.push(row);
            });

            response = await axios.get(this.apiDomain +'/api/v1/areas/inside_sports');
            response.data.forEach((row, i) => {
                row.thumb = helper.url(row.original_img, "120x68");
                row.title = row.title.replace("[사진]", "");
                row.titleCut = helper.truncate(helper.stripgiza(row.title), 15);
                row.contentCut = helper.truncate(helper.stripgiza(row.content), 45);
                this.tabs.sports.rows.push(row);
            });
        } catch (error) {
            this.errors.push(error);
        }
    }
}
</script>
