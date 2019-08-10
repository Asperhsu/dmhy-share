<template>
    <vue-drawer-layout
        ref="drawer"
        :drawer-width="300"
        @slide-end="handleSlideEnd"
        @mask-click="toggleDrawer">
        <div class="drawer-content" slot="drawer">
            <Drawer :visible="drawerVisible"></Drawer>
        </div>
        <div slot="content">
            <router-view></router-view>
        </div>
    </vue-drawer-layout>
</template>

<script>
    import {DrawerLayout} from 'vue-drawer-layout';
    import Drawer from '@/components/Drawer';

    export default {
        name: 'app',
        components: {
            [DrawerLayout.name]: DrawerLayout,
            Drawer,
        },

        data () {
            return {
                drawerVisible: false,
            };
        },

        created () {
            if (location.protocol == 'https:') {
                location.href = location.href.replace('https:', 'http:');
            }
        },

        mounted () {
            this.toggleDrawer();
        },

        created () {
            this.$eventHub.$on('toggle-drawer', this.toggleDrawer);
        },

        beforeDestroy () {
            this.$eventHub.$off('toggle-drawer');
        },

        methods: {
            toggleDrawer() {
                this.$refs.drawer.toggle();
            },
            handleSlideEnd (visible) {
                this.drawerVisible = visible;
            },
        },
    }
</script>

<style>
    html, body {
        overflow: hidden !important;
    }

    .table .fit {
        width:1%;
        white-space:nowrap;
    }
</style>