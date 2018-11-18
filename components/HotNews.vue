<template>
    <div class="tabArea3 hot-news__container">
        <div id="hot_news">
            <div><img :src="staticDomain +'/web2/images/common/tlt_hot_news.gif'" /></div>
            <div class="slides_container">
                <div class="slide">
                    <a v-for="row in rows.slice(0, 2)" :key="row" class="item" :href="'/article/'+ row.gisano">
                        <div class="thumb"><img :src="row.thumb_url" /></div>
                        <p class="textView">{{ row.title }}</p>
                    </a>
                </div>
                <div class="slide">
                    <a v-for="row in rows.slice(2, 4)" :key="row" class="item" :href="'/article/'+ row.gisano">
                        <div class="thumb"><img :src="row.thumb_url" /></div>
                        <p class="textView">{{ row.title }}</p>
                    </a>
                </div>
            </div>
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
            rows: [],
            errors: []
        }
    },
    mounted() {
        axios.get(this.apiDomain +'/api/v1/areas/hot_news')
            .then(response => {
                this.rows = [];
                response.data.forEach((row, i) => {
                    row.thumbUrl1 = helper.thumb_img(row.thumb_url, 0);
                    row.title = row.title.replace(" \"", "");
                    row.contentCut = helper.truncate(helper.stripgiza(row.content), 40);
                    this.rows.push(row);
                });

                $('#hot_news').slides({
                    preload: false,
                    preloadImage: this.staticDomain +'/web2/images/common/loading.gif',
                    generatePagination: true,
                    generateNextPrev: false,
                    pause: 2500,
                    hoverPause: true,
                    slidesLoaded: function () {
                        $('.tabArea3').css({ 'padding':0 }).show();
                    }
                });
            })
            .catch(e => {
                this.errors.push(e);
                if (this.errors.length > 0) console.error(this.errors);
            });
    }
}
</script>

<style>
.hot-news__container {
    position:relative;
    margin: 0 auto 1.5em auto;
    padding-top:33px;
    float: none;
}

.tabView li {
    height: 18px;
    padding: 3px;
}

.hot-news__container { display: none; }

/* HOT NEWS Slider */
#hot_news {
    width: 257px;
    height: 178px;
    overflow: hidden;
    border: 1px solid #d70380;
}
#hot_news .slides_container {
    height: 136px;
}
#hot_news .slides_container .slide {
    width: 257px;
}
#hot_news .slides_container .item {
    display: block;
    float: left;
    margin-top: 20px;
    margin-left: 9px;
    width: 115px;
    height: 116px;
    overflow: hidden;
}
#hot_news .slides_container .item .thumb { width: inherit; height: 75px; overflow: hidden; }
#hot_news .slides_container .item .thumb img { width: 100%; }
#hot_news .slides_container .item .textView { height: 35px; overflow: hidden; line-height: 17px; font-size: 12px }

#hot_news .pagination {
    margin: 0 auto 0;
    position: absolute;
    top: 49px;
    right: 10px;
    z-index: 101;
}

#hot_news .pagination li {
    float: left;
    margin:0 1px;
}

#hot_news .pagination li a {
    display:block;
    width:8px;
    height:0;
    padding-top:8px;
    background-image:url('http://file.yourdomain.com/web2/images/common/bg_breakinglive_pagination.gif');
    background-position:0 0;
    float:left;
    overflow:hidden;
}

#hot_news .pagination li.current a {
    background-position: 0 -8px;
}
</style>