<template>
    <div class="program">
        <dmhy-frame
            v-if="contentSrc" :src="contentSrc"
        ></dmhy-frame>
    </div>
</template>

<script>
    import DmhyFrame from '@/components/DmhyFrame';
    let dmhyUrl = "https://share.dmhy.org/topics/list?keyword=";

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

<style scoped>
    .program {
        background-color: #1d1d1d;
        color: #bcbcbc;
        height: 100vh;
    }
</style>
