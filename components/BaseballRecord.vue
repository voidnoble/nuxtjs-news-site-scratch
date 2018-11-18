<template>
    <!-- 프로야구 팀 순위표 -->
    <div class="baseballTable">
        <h4>
            <img :src="staticDomain +'/web2/images/main/h4_baseball_teamrank.gif'" alt="프로야구 팀 순위표" /> 
            &nbsp;&nbsp;<span>{{ thisMonth }}월 {{ thisDay }}일 현재</span>
        </h4>
        <div class="tableScroll">
            <table summary="프로야구 팀 순위표" style="width: 490px;">
                <thead>
                    <tr>
                        <th style="width:46px;"><img alt="순위" :src="staticDomain +'/web2/images/common/th_rank.gif'" /></th>
                        <th style="width:103px;"><img alt="팀명" :src="staticDomain +'/web2/images/common/th_team_name.gif'" /></th>
                        <th style="width:36px;"><img alt="경기" :src="staticDomain +'/web2/images/common/th_play.gif'" /></th>
                        <th style="width:36px;"><img alt="승" :src="staticDomain +'/web2/images/common/th_win.gif'" /></th>
                        <th style="width:21px;"><img alt="무" :src="staticDomain +'/web2/images/common/th_draw.gif'" /></th>
                        <th style="width:36px;"><img alt="패" :src="staticDomain +'/web2/images/common/th_defeat.gif'" /></th>
                        <th style="width:46px;"><img alt="승차" :src="staticDomain +'/web2/images/common/th_passenger.gif'" /></th>
                        <th><img alt="승률" :src="staticDomain +'/web2/images/common/th_odds.gif'" /></th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="tableScroll height104">
            <table summary="프로야구 팀 순위표" style="width:490px;">
                <colgroup>
                    <col style="width:55px;">
                    <col style="width:112px;">
                    <col style="width:45px;">
                    <col style="width:45px;">
                    <col style="width:30px;">
                    <col style="width:45px;">
                    <col style="width:55px;">
                    <col>
                </colgroup>
            <tbody>
                <tr v-for="(row, i) in rows" :key="row">
                    <td>{{ i + 1 }}</td>
                    <td><img :src="staticDomain +'/web2/images/ico/ico_team_'+ row.team_id +'.gif'" :alt="row.teamName" />{{ row.teamNameAbbr }}</td>
                    <td>{{ row.win + row.lose + row.draw }}</td>
                    <td>{{ row.win }}</td>
                    <td>{{ row.draw }}</td>
                    <td>{{ row.lose }}</td>
                    <td>{{ (rows[0].win - row.win - (rows[0].lose - row.lose)) / 2 }}</td>
                    <td>{{ row.rate.toFixed(3) }}</td>
                </tr>
            </tbody>
            </table><!-- //0911 수정 끝 -->
        </div>
    </div>
    <!-- 프로야구 팀 순위표 //-->
</template>

<script>
import axios from "axios";
import helper from "~/plugins/helper";
import teams from "~/plugins/baseballTeam";

export default {
    props: ['staticDomain', 'apiDomain'],
    data() {
        return {
            rows: [],
            errors: [],
            thisMonth: new Date().getMonth() + 1,
            thisDay: new Date().getDate(),
        }
    },
    mounted() {
        axios.get(this.apiDomain +'/api/v1/areas/baseball_record')
            .then(response => {
                this.rows = [];

                response.data.forEach((row, i) => {
                    row.rate = (row.win + row.lose != 0)? parseFloat(row.win / (row.win + row.lose)) : row.rate = parseFloat(0);

                    if (typeof teams != 'undefined') {
                        row.teamName = teams[row.team_id];
                        row.teamNameAbbr = helper.blockstr(row.teamName, 0);
                    } else {
                        row.teamName = "";
                        row.teamNameAbbr = "";
                    }
                    
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
