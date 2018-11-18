<template>
    <!--  포토 슬라이드 -->
    <div class="photoSlide">
        <h5><img :src="staticDomain +'/web2/images/entertainment/h5_photo_slide.gif'" alt=" 포토 슬라이드" /></h5>
        <div id="slideBox">
            <div class="slideLink">
                <div id="scroll_wrap" style="height:575px;overflow:hidden;">
                    <ul id="scroll_area">
                        <li v-for="row in rows" :key="row">
                            <a :href="'/photo/slide_view/'+ row.album_idx"><img :src="row.thumbUrl4" /></a>
                            <p>{{ row.titleCut }}</p>
                        </li>
                    </ul>
                </div>
                <ol>
                    <li id="pre_wrapper">&nbsp;&nbsp;</li>
                    <li id="page_area">1/2</li>
                    <li id="next_wrapper"><a href="#" id="next_page_btn">&gt;</a></li>
                </ol>
            </div>

            <!-- 슬라이드 -->
            <div id="slideAreaBox">
                <div class="slides_container">
                    <div class="item">
                        <a href="#" id="pre_btn" @click="prePhotoslide($event)"><img style="float:left;margin-top:230px;" :src="staticDomain +'/web2/images/btn/btn_slide_prev.png'" /></a>
                        <a href="#" id="next_btn" @click="nextPhotoslide($event)"><img style="float:right;margin-top:230px;" :src="staticDomain +'/web2/images/btn/btn_slide_next.png'" /></a>

                        <div id="main_img">
                            <img v-show="photoslideCurrent.src" :src="photoslideCurrent.src" @load="resizeImg($event.target, 398, 502);">
                        </div>
                        <div class="sbj" style="clear:both;">
                            <span id="slide_title_area" v-show="photoslideCurrent.title"><a :href="'/photo/slide_view/'+ photoslideCurrent.albumId">{{ photoslideCurrent.title }}</a>&nbsp;<a :href="'/article/'+ photoslideCurrent.gisano"><img :src="this.staticDomain +'/web2/images/btn/btn_article_view.gif'" alt="기사보기" /></a></span>
                        </div>
                        <p class="textView" id="article_area" v-show="photoslideCurrent.subArticle">{{ photoslideCurrent.subArticle }}</p>
                    </div>
                </div>
            </div>
            <!-- 슬라이드 //-->
        </div>
    </div>
    <!--  포토 슬라이드 //-->
</template>

<script>
import axios from "axios";
import helper from "~/plugins/helper";

export default {
    props: ['staticDomain', 'apiDomain', 'sliceEnd'],
    data() {
        return {
            rows: [],
            photoslide: [],
            g_order: 0,
            arr_slide_photo: [],
            photoslideCurrent: {
                src: '',
                title: '',
                albumId: '',
                gisano: '',
                subArticle: '',
            },
            errors: []
        }
    },
    mounted() {
        axios.get(this.apiDomain +'/api/v1/areas/photoslide')
            .then(response => {
                this.rows = [];
                response.data.forEach((row, i) => {
                    row.thumbUrl4 = helper.thumb_img(row.thumb_url, 4);
                    row.title = row.title.replace("[사진]", "");
                    row.titleCut = helper.truncate(row.title, 15);
                    row.contentCut = helper.truncate(helper.stripgiza(row.content), 10);
                    this.rows.push(row);
                });
                this.rows.splice(this.sliceEnd);    // rows count limit
                this.rows.sort(() => 0.5 - Math.random()); // like php's shuffle()
                let albumId = this.rows[0].album_idx;
                axios.get(this.apiDomain +'/api/v1/photoslides/'+ albumId)
                    .then(response => {
                        this.photoslide = response.data;
                        
                        this.photoslide.photo.forEach((photo, i) => {
                            this.arr_slide_photo[i] = new Array(helper.url(photo.IMG), photo.TITLE.replace("[사진]", ""), photo.GIZA_NAME, photo.GISANO, albumId, photo.SUBARTICLE);
                        });
                        
                        this.setPhotoslide(0);
                    })
                    .catch(e => {
                        console.error(e);
                        this.errors.push(e);
                    });
            })
            .catch(e => {
                console.error(e);
                this.errors.push(e);
            });
    },
    methods: {
        setPhotoslide(i) {
            if (typeof this.arr_slide_photo == 'undefined' || this.arr_slide_photo.length < 1 ) return false;
            if (typeof this.arr_slide_photo[i] == 'undefined' || this.arr_slide_photo.length[i] < 1 ) return false;
            
            this.photoslideCurrent.src = this.arr_slide_photo[i][0];
            this.photoslideCurrent.title = this.arr_slide_photo[i][1];
            this.photoslideCurrent.albumId = this.photoslide.album.idx;
            this.photoslideCurrent.gisano = this.arr_slide_photo[i][3];
            this.photoslideCurrent.subArticle = this.arr_slide_photo[i][5];
        },
        resizeImg(img, x, y) {
            let w = parseInt(img.width, 10);
            let h = parseInt(img.height, 10);

            if (w >= x || h >= y) {
                if ((w/h) / (x/y) >= 1) img.width = x;
                else img.height = y;
            }
        },
        prePhotoslide(evt) {
            if (evt) evt.preventDefault();

            this.g_order--;
            if (this.g_order < 0) {
                this.g_order = this.arr_slide_photo.length - 1;
            }

            this.setPhotoslide(this.g_order);

            if (process.env.NODE_ENV === 'production') {
                let img = new Image(); img.src = "http://wl..co.kr/loga/logb.php?gisano="+ this.arr_slide_photo[this.g_order][3] +"&album_idx="+ this.arr_slide_photo[this.g_order][4] +"&r="+ encodeURIComponent(document.referrer);
            }
        },
        nextPhotoslide(evt) {
            if (evt) evt.preventDefault();
            
            this.g_order++;
            if (this.g_order >= this.arr_slide_photo.length) {
                this.g_order = 0;
            }

            this.setPhotoslide(this.g_order);

            if (process.env.NODE_ENV === 'production') {
                let img = new Image();img.src="http://wl..co.kr/loga/logb.php?gisano="+this.arr_slide_photo[this.g_order][3]+"&album_idx="+this.arr_slide_photo[this.g_order][4]+"&r="+encodeURIComponent(document.referrer);
            }
        },
    }
}
</script>

<style>
#slideAreaBox .item .sbj {
    margin-top: 0.5em;
}

#slideAreaBox .item #main_img {
    display: table-cell;
    margin-bottom: 10px;
    width: 425px;
    height: 495px;
    vertical-align: middle;
    text-align: center;
}
</style>