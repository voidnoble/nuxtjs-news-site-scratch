/* eslint-disable */
class Helper {
    constructor() {
        //
    }

    getQuerystring(key) {
        key = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + key + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    thumb_img(psvImgName, i) {
        if (!psvImgName) return "";
        let imgNames = psvImgName.split("|");
        if (imgNames.length < i) i = imgNames.length - 1;
        if (!imgNames[i]) i += 1;
        return imgNames[i];
    }

    truncate(str, length) {
        if (!str) return "";
        let suffix = (str.length > length)? "..." : "";
        return str.substr(0, length) + suffix;
    }

    stripgiza(str) {
        if (!str) return "";
        return str.replace(/^\[[^\]]+\]/, '');
    }

    url(str, dimension = "") {
        if (!str) return "";

        let url = "";
        let img = this.thumb_img(str, 0);

        if (dimension) {    // 면적이 지정이면 썸네일
            img = img.substr(0, 4) +"/"+ img.substr(4, 2) +"/"+ img.substr(6, 2) +"/"+ img.replace(/\.(jpg|png|gif)$/, `_${dimension}.$1`);
            url = process.env.staticDomain +"/article_thumb/"+ img;
        } else {    // 면적이 비지정이면 웹용 이미지
            img = img.substr(0, 4) +"/"+ img.substr(4, 2) +"/"+ img.substr(6, 2) +"/"+ img.replace(/\.(jpg|png|gif)$/, `.$1`);
            url = process.env.staticDomain +"/article/"+ img;
        }

        return url;
    }

    blockstr(str, i) {
        if (!str) return "";
        let arr = str.split(' ');
        return arr[i];
    }

    getLocation(section) {
        let str = `<ul id="location">
            <li><a href="/">홈</a> &gt;</li>
            <li><a href="/${section.c1[0]}">${section.c1[1]}</a> &gt;</li>
            <li><a href="/${section.c1[0]}/${section.c2[0]}"><strong>${section.c2[1]}</strong></a></li>
        </ul>`;

        return str;
    }

    getNewsDisplayDate(datetime) {
        if (!datetime) return "";
        return datetime.substr(0, 4) +"-"+ datetime.substr(4, 2) +"-"+ datetime.substr(6, 2) +" "+ datetime.substr(8, 2) +":"+ datetime.substr(10, 2);
    }

    htmlEntityDecode(str) {
        if (!str) return '';

        return str.replace('&nbsp;', ' ').replace('&nbsp', ' ').replace('&lt;', '<').replace('&gt;', '>').replace('&quot;', '"').replace('&39;', '#');
    }

    suffle(arr) {
        return arr.sort(() => 0.5 - Math.random());
    }
}

export default new Helper();