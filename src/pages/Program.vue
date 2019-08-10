<template>
    <div class="content">
        <dmhy-frame
            v-if="contentSrc" :src="contentSrc"
            style="height: 100vh;"
        ></dmhy-frame>
    </div>
</template>

<script>
    import DmhyFrame from '@/components/DmhyFrame';
    let dmhyUrl = "http://share.dmhy.org/topics/list?keyword=";

    export default {
        components: { DmhyFrame },

        computed: {
            keyword () { return this.$route.query && this.$route.query.keyword; },
            contentSrc () {
                if (!this.keyword) { return null; }
                return dmhyUrl + this.keyword;
            },
        },
    }
</script>
