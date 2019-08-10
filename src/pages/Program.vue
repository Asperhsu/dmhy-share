<template>
    <div class="content">
        <h1>Content</h1>
        <p class="text-right">
            {{ keyword }}
        </p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                //
            };
        },

        computed: {
            keyword () { return this.$route.query && this.$route.query.keyword; },
        },
    }
</script>
