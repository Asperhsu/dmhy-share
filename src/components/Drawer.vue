<template>
    <div class="drawer">
        <div class="open-btn" @click="toggleDrawer">
            <i class="fas fa-angle-double-left fa-2x" v-if="drawerOpen"></i>
            <i class="fas fa-angle-double-right fa-2x" v-else></i>
        </div>

        <div class="drawer-container d-flex flex-column h-100">
            <div class="header d-flex align-items-center m-3">
                <h3 class="mb-0" v-if="!changeSeason" v-text="activeSource.season_name || 'Loading'"></h3>

                <div v-else class="d-inline-block mr-2">
                    <div class="input-group input-group-sm">
                        <div class="input-group-prepend">
                            <label class="input-group-text bg-dark text-light">季度</label>
                        </div>
                        <select class="custom-select" v-model="activeSession">
                            <option v-for="(name, slug) in seasons" :key="slug" :value="slug" v-text="name"></option>
                        </select>
                    </div>
                </div>

                <button type="button" class="ml-auto btn btn-sm btn-info" @click="changeSeason = !changeSeason">
                    <i class="fa fa-sync-alt"></i>
                </button>
            </div>

            <div class="content flex-grow-1">
                <ul class="list-group list-group-flush">
                    <template v-for="(weekName, weekNo) in weekNames">
                        <li class="list-group-item d-flex justify-content-between align-items-center"
                            :class="{'bg-primary': activeWeekNo == weekNo}" style="cursor: pointer;"
                            :key="'head' + weekNo" @click="activeWeekNo = weekNo">
                            {{ weekName }}
                            <span class="badge badge-secondary badge-pill" v-text="programsByWeek[weekNo].length"></span>
                        </li>
                        <program-container
                            :key="'body' + weekNo"
                            :week-no="weekNo"
                            :programs="programsByWeek[weekNo]"
                        ></program-container>
                    </template>
                </ul>

                <div class="form-check my-2 mx-3">
                    <input class="form-check-input" id="autoCloseCheck" type="checkbox" v-model="autoClose" :value="true">
                    <label class="form-check-label" for="autoCloseCheck">自動關閉</label>
                </div>
                <div class="form-check my-2 mx-3">
                    <input class="form-check-input" id="showHiddenProgramCheck" type="checkbox" v-model="showHiddenProgram" :value="true">
                    <label class="form-check-label" for="showHiddenProgramCheck">顯示隱藏番組</label>
                </div>

                <div class="mx-3 mt-3">
                    <div><span class="badge badge-info">資料來源</span></div>
                    <div><small><a :href="activeSource.url" target="_blank" v-text="activeSource.title"></a></small></div>
                </div>
            </div>

            <div class="footer mt-3 mx-3 py-2">
                <auth-bar></auth-bar>
            </div>
        </div>
    </div>
</template>

<script>
    import {db} from '@/db.js';
    import {weekNames, programsByWeek} from '@/weeknames.js';
    import AuthBar from '@/components/AuthBar';
    import ProgramContainer from '@/components/programs/ProgramContainer';

    export default {
        components: {AuthBar, ProgramContainer},

        data () {
            return {
                sources: {},
                programs: [],

                weekNames: weekNames,
                changeSeason: false,
            };
        },

        computed: {
            activeSource () {
                let sources = this.sources.filter(source => source.active);
                return sources.length ? sources[0] : {};
            },
            programsByWeek () { return programsByWeek(this.programs); },
            seasons () {
                let seasons = {};
                this.sources.map(source => {
                    seasons[source.season_slug] = source.season_name;
                });
                return seasons;
            },
            drawerOpen () { return this.$store.state.autoClose; },
            autoClose: {
                get() { return this.$store.state.autoClose; },
                set(value) { this.$store.commit('autoClose', value); },
            },
            showHiddenProgram: {
                get() { return this.$store.state.showHiddenProgram; },
                set(value) { this.$store.commit('showHiddenProgram', value); },
            },
            activeSession: {
                get() { return this.$store.state.activeSession; },
                set(value) { this.$store.commit('activeSession', value); },
            },
            activeWeekNo: {
                get() { return this.$store.state.activeWeekNo; },
                set(value) { this.$store.commit('activeWeekNo', value); },
            },
        },

        watch: {
            sources () {
                if (!this.activeSource.season_slug) return;
                this.$store.commit('activeSession', this.activeSource.season_slug);
            },
            activeSession: {
                immediate: true,
                handler (value) {
                    if (!value) return;
                    let programsRef = db.collection('programs').where("season_slugs", "array-contains", value);
                    this.$bind('programs', programsRef);
                },
            },
        },

        firestore: {
            sources: db.collection('sources'),
        },

        methods: {
            toggleDrawer () { this.$store.commit('toggleDrawer'); }
        },
    }
</script>

<style>
    a { color: #ccc; }
    a:hover { color: #5da6f5; }

    .drawer {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background-color: #333;
        color: #ddd;
    }

    .drawer-container {
        overflow-y: auto;
        overflow-x: hidden;
    }

    .open-btn {
        position: absolute;
        top: 285px;
        right: -90px;
        width: 90px;
        padding: 10px;
        text-align: right;
        z-index: 10;
        background-color: #333;
        color: #ddd;
    }

    .drawer .list-group-item {
        background-color: transparent;
        border-color: rgba(255, 255, 255, 0.125);
    }
</style>
