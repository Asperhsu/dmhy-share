<template>
    <div class="dmhy-frame">
        <iframe :src="src" frameborder="0"></iframe>
    </div>
</template>

<script>
    export default {
        props: {
            src: {
                type: String,
                required: true,
            },
        },
    }
</script>

<style scoped>
    .dmhy-frame {
        background: url('../assets/loading.gif') center center no-repeat;
        height: 100%;
    }

    .dmhy-frame iframe {
        width: 100%;
        height: 100%;
    }
</style>