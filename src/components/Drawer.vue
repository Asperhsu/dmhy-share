<template>
    <div class="drawer">
        <div class="open-btn" @click="$eventHub.$emit('toggle-drawer')">
            <i class="fas fa-angle-double-left fa-2x" v-if="visible"></i>
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
                            :key="'head' + weekNo" @click="changeWeekNo(weekNo)">
                            {{ weekName }}
                            <span class="badge badge-secondary badge-pill" v-text="programsByWeek[weekNo].length"></span>
                        </li>
                        <div class="program-container list-group-item collapse" :class="{show: activeWeekNo == weekNo}"
                            :key="'body' + weekNo" v-if="programsByWeek[weekNo].length">

                            <div class="program-item" :class="{hidden: isProgramHidden(program)}"
                                v-show="showHiddenProgram || !isProgramHidden(program)"
                                v-for="(program, index) in programsByWeek[weekNo]" :key="weekNo + index">

                                <a href="#" class="text-truncate d-block p-1" :title="program.name"
                                    @click.prevent="changeProgram(program)" >
                                    {{ program.name }}
                                </a>

                                <span v-if="!isProgramHidden(program)" class="toggle-btn text-warning" @click="toggleProgramHidden(program)">
                                    <i class="fa fa-minus-circle"></i>
                                </span>
                                <span v-else class="toggle-btn text-success" @click="toggleProgramHidden(program)">
                                    <i class="fa fa-plus-circle"></i>
                                </span>
                            </div>

                            <div class="program-item"
                                v-for="(program, index) in userProgramsByWeek[weekNo]" :key="'u' + weekNo + index">
                                <a href="#" class="text-truncate d-block p-1" :title="program.name"
                                    @click.prevent="changeProgram(program)" >
                                    <i class="fa fa-child"></i> {{ program.name }}
                                </a>
                                <span class="toggle-btn text-danger" @click="removeUserProgram(program)">
                                    <i class="fa fa-times-circle"></i>
                                </span>
                            </div>

                            <div class="program-item p-2">
                                <i class="fa fa-plus"></i>
                                <input type="text" class="ml-2 form-control form-control-sm" v-model="userProgramName" placeholder="自定義番組">
                                <button class="ml-2 btn btn-sm btn-success" @click="saveUserProgram(weekNo)"><i class="fa fa-save"></i></button>
                            </div>
                        </div>
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
    import weeknames from '@/weeknames.js';
    import AuthBar from '@/components/AuthBar';

    export default {
        components: {AuthBar},

        props: ['visible'],

        data () {
            return {
                changeSeason: false,
                activeSession: null,

                sources: {},
                programs: [],

                weekNames: weeknames,
                activeWeekNo: (new Date).getDay(),

                autoClose: true,
                showHiddenProgram: false,
                userRemoveProgramIds: [],
                userProgramName: null,
                userPrograms: [],
            };
        },

        computed: {
            programsByWeek () {
                let programs = {};
                this.weekNames.map((name, no) => {
                    programs[no] = [];
                });

                this.programs.map(program => {
                    programs[program.week_no].push(program);
                });
                return programs;
            },
            userProgramsByWeek () {
                let programs = {};
                this.weekNames.map((name, no) => {
                    programs[no] = [];
                });

                this.userPrograms.map(program => {
                    programs[program.week_no].push(program);
                });
                return programs;
            },
            activeSource () {
                let sources = this.sources.filter(source => source.active);
                return sources.length ? sources[0] : {};
            },
            seasons () {
                let seasons = {};
                this.sources.map(source => {
                    seasons[source.season_slug] = source.season_name;
                });
                return seasons;
            },
        },

        watch: {
            sources () {
                if (!this.activeSource.season_slug) return;
                this.activeSession = this.activeSource.season_slug;
            },
            activeSession (value) {
                let programsRef = db.collection('programs').where("season_slugs", "array-contains", value);
                this.$bind('programs', programsRef);
            },
        },

        storage: {
            keys: ['autoClose', 'showHiddenProgram', 'userRemoveProgramIds', 'userPrograms'],
            namespace: 'drawer',
        },

        firestore: {
            sources: db.collection('sources'),
        },

        methods: {
            changeWeekNo(weekNo) {
                this.activeWeekNo = (this.activeWeekNo == weekNo) ? null : weekNo;
            },
            changeProgram (program) {
                if (this.$route.name !== 'program' || this.$route.query.keyword !== program.keyword) {
                    this.$router.push({name: 'program', query: {keyword: program.keyword }});
                    this.autoClose && this.$eventHub.$emit('toggle-drawer', false);
                }
            },
            toggleProgramHidden (program) {
                let ids = this.userRemoveProgramIds.concat();

                let index = this.userRemoveProgramIds.indexOf(program.id);
                (index > -1) ? ids.splice(index, 1) : ids.push(program.id);

                this.userRemoveProgramIds = ids;
            },
            isProgramHidden (program) {
                return this.userRemoveProgramIds.find(id => id === program.id) !== undefined;
            },
            saveUserProgram (weekNo) {
                if (!this.userProgramName) return false;
                this.userPrograms.push({
                    week_no: weekNo,
                    name: this.userProgramName,
                    keyword: this.userProgramName,
                });
            },
            removeUserProgram(program) {
                let index = this.userPrograms.findIndex(prog => {
                    return prog.weekNo === program.weekNo && prog.name === program.name;
                });

                if (index <= -1) return;

                let programs = this.userPrograms.concat();
                programs.splice(index, 1);
                this.userPrograms = programs;
            },
        },
    }
</script>

<style scoped>
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

    .list-group-item {
        background-color: transparent;
        border-color: rgba(255, 255, 255, 0.125);
    }

    .program-container {
        background-color: #464646;
        padding-left: 1.5rem!important;
    }

    .program-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .program-item.hidden {
        text-decoration: line-through;
        opacity: .7;
    }

    .program-item .toggle-btn {
        display: none;
    }
    .program-item:hover .toggle-btn {
        display: inline;
    }
</style>
