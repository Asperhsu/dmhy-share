<template>
    <div class="content-frame">
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
    .content-frame {
        background: url('../assets/loading.gif') center center no-repeat;
    }

    .content-frame iframe {
        width: 100%;
        height: 100%;
    }
</style>