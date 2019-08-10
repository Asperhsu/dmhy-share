<template>
    <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text">目前季度</span>
        </div>
        <input type="text" class="form-control" v-model="season">
        <div class="input-group-append">
            <button class="btn btn-primary" type="button" @click="saveCurrentSeason">修改</button>
        </div>
    </div>
</template>

<script>
    import {db} from '@/db.js';
    export default {
        data () {
            return {
                current: {},
                season: null,
            };
        },

        watch: {
            current (value) {
                this.season = value.season;
            },
        },

        firestore: {
            current: db.collection('settings').doc('current'),
        },

        methods: {
            saveCurrentSeason () {
                db.collection('settings')
                    .doc('current')
                    .set({ season: this.season });
            },
        },
    }
</script>