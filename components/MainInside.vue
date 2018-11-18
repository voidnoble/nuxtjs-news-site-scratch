<template>
    <!--  INSIDE -->
    <div class="Inside">
        <h4><img :src="staticDomain +'/web2/images/main/h4__inside.gif'" alt=" 인사이드" /></h4>
        <!-- tab -->
        <div class="tabArea1">
            <ul class="tabLink">
                <li v-for="(tab, tabId, i) in tabs" :key="i">
                    <img :src="staticDomain +'/web2/images/main/tab_main'+ (i + 1) +'_'+ ((i == 1)? 'on' : 'off') +'.gif'" :alt="tab.name">
                </li>
            </ul>
            <div v-for="(tab, tabId, i) in tabs" :key="i" class="tabView" :title="i" :style="{ display: ((i == 1)? 'block' : 'none') }">
                <ul v-if="tabs[tabId].rows.length > 0" class="insideNews">
                    <li>
                        <a :href="'/article/'+ tabs[tabId].rows[0].gisano">{{ tabs[tabId].rows[0].title }}</a>
                    </li>
                    <li style="white-space:normal;word-wrap:break-word;height:55px;">{{ tabs[tabId].rows[0].contentCut }}</li>
                </ul>
                <ul v-if="tabs[tabId].rows.length > 1" class="insideNews">
                    <li><a :href="'/article/'+ tabs[tabId].rows[1].gisano">{{ tabs[tabId].rows[1].title }}</a></li>
                    <li style="white-space:normal;word-wrap:break-word;height:55px;">{{ tabs[tabId].rows[1].contentCut }}</li>
                </ul>
                <ul v-if="tabs[tabId].rows.length > 2" class="insideNewsOther">
                    <li v-for="row in tabs[tabId].rows.slice(2, 7)" :key="row">
                        <a :href="'/article/'+ row.gisano">{{ row.title }}</a>
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
                row.title = row.title.replace("[사진]", "");
                row.contentCut = helper.truncate(helper.stripgiza(row.content), 90);
                this.tabs.entertainment.rows.push(row);
            });
            
            response = await axios.get(this.apiDomain +'/api/v1/areas/inside_baseball');
            response.data.forEach((row, i) => {
                row.title = row.title.replace("[사진]", "");
                row.contentCut = helper.truncate(helper.stripgiza(row.content), 90);
                this.tabs.baseball.rows.push(row);
            });

            response = await axios.get(this.apiDomain +'/api/v1/areas/inside_sports');
            response.data.forEach((row, i) => {
                row.title = row.title.replace("[사진]", "");
                row.contentCut = helper.truncate(helper.stripgiza(row.content), 90);
                this.tabs.sports.rows.push(row);
            });
        } catch (error) {
            this.errors.push(error);
        }
    }
}
</script>
