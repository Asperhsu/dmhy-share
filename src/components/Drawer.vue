<template>
    <div class="drawer">
        <div class="open-btn" @click="$eventHub.$emit('toggle-drawer')">
            <i class="fas fa-angle-double-left fa-2x" v-if="visible"></i>
            <i class="fas fa-angle-double-right fa-2x" v-else></i>
        </div>

        <div class="container d-flex flex-column h-100">
            <div class="header mb-3">
                <h1>Drawer</h1>
            </div>

            <div class="content flex-grow-1">
                <ul class="list-group list-group-flush">
                    <template v-for="(weekName, weekNo) in weekNames">
                        <li class="list-group-item d-flex justify-content-between align-items-center"
                            style="cursor: pointer;"
                            :key="'head' + weekNo" @click="changeWeekNo(weekNo)">
                            {{ weekName }}
                            <span class="badge badge-secondary badge-pill" v-text="programsByWeek[weekNo].length"></span>
                        </li>
                        <div class="list-group-item collapse" :class="{show: activeWeekNo == weekNo}"
                            :key="'body' + weekNo" v-if="programsByWeek[weekNo].length">
                            <a href="#" class="text-truncate d-block p-1"
                                v-for="(program, index) in (programsByWeek[weekNo] || [])" :key="weekNo + index"
                                @click.prevent="changeProgram(program)" >
                                <i class="fa fa-caret-right mr-1"></i> {{ program.name }}
                            </a>
                        </div>
                    </template>
                </ul>
            </div>

            <div class="footer mt-3 py-2 border-top">
                <auth-bar></auth-bar>
            </div>
        </div>
    </div>
</template>

<script>
    import {db} from '@/db.js';
    import AuthBar from '@/components/AuthBar';

    export default {
        components: {AuthBar},

        props: ['visible'],

        data () {
            return {
                current: {},
                programs: [],

                weekNames: ['週日 (日曜日)', '週一 (月曜日)', '週二 (火曜日)', '週三 (水曜日)', '週四 (木曜日)', '週五 (金曜日)', '週六 (土曜日)'],
                activeWeekNo: (new Date).getDay(),
            };
        },

        computed: {
            currentSeason () {
                return this.current.season;
            },
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
        },

        watch: {
            currentSeason (value) {
                let programsRef = db.collection('programs').where("seasons", "array-contains", value);
                this.$bind('programs', programsRef)
            },
        },

        firestore: {
            current: db.collection('settings').doc('current'),
        },

        methods: {
            changeWeekNo(weekNo) {
                this.activeWeekNo = (this.activeWeekNo == weekNo) ? null : weekNo;
            },
            changeProgram (program) {
                if (this.$route.name !== 'program' || this.$route.query.keyword !== program.keyword) {
                    this.$router.replace({name: 'program', query: {keyword: program.keyword }});
                }
            },
        },
    }
</script>

<style scoped>
    a { color: #5da6f5; }
    a:hover { color: #53bac7; }

    .drawer {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background-color: #333;
        color: #ddd;
    }

    .container {
        overflow-y: auto;
        overflow-x: hidden;
    }

    .open-btn {
        position: absolute;
        top: 20px;
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
</style>
