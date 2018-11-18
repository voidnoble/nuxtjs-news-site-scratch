<template>
    <form name="top_search_form" method="get">
        <fieldset>
            <legend>Search</legend>
            <input type="text" class="searchInput" name="keyword" onClick="this.value='';" onKeyPress="if (event.keyCode==13) { go_search(); return false; }" />
            <a href="#" onClick="go_search();return false;" style="display: inline-block; float: right; width: 35px; height: 26px;">
                <img :src="staticDomain +'/web2/images/btn/btn_search1.gif'" alt="Search" />
            </a>
        </fieldset>
    </form>
</template>

<script>
export default {
    data() {
        return {
            staticDomain: process.env.staticDomain,
        }
    }
}
</script>
