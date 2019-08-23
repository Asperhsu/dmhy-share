<template>
    <div class="program-container list-group-item collapse">

        <program-item
            v-for="(program, index) in programs" :key="weekNo + index"
            :hidden="isProgramHidden(program)"
            v-show="showHidden || !isProgramHidden(program)"
            :program="program"
            @show="changeProgram(program)"
            @toggleHidden="toggleProgramHidden(program)"
        ></program-item>

        <user-program
            :programs="userProgramsByWeek[weekNo]"
            @show="changeProgram(program)"
            @add="name => saveUserProgram(weekNo, name)"
            @remove="program => removeUserProgram(program)"
        ></user-program>
    </div>
</template>

<script>
    import weeknames from '@/weeknames.js';
    import ProgramItem from '@/components/programs/ProgramItem';
    import UserProgram from '@/components/programs/UserProgram';

    export default {
        components: {ProgramItem, UserProgram},

        props: {
            weekNo: {
                type: Number,
                default: null,
            },
            programs: {
                type: Array,
                default: [],
            },
            showHidden: {
                type: Boolean,
                default: false,
            },
        },

        data () {
            return {
                userRemoveIds: [],
                userPrograms: [],
            }
        },

        computed: {
            userProgramsByWeek () {
                let programs = {};
                weeknames.map((name, no) => {
                    programs[no] = [];
                });

                this.userPrograms.map(program => {
                    programs[program.week_no].push(program);
                });
                return programs;
            },
        },

        storage: {
            keys: ['userRemoveIds', 'userPrograms'],
            namespace: 'programs',
        },

        methods: {
            changeProgram (program) {
                if (this.$route.name !== 'program' || this.$route.query.keyword !== program.keyword) {
                    this.$router.push({name: 'program', query: {keyword: program.keyword }});
                    this.autoClose && this.$eventHub.$emit('toggle-drawer', false);
                }
            },
            toggleProgramHidden (program) {
                let ids = this.userRemoveIds.concat();

                let index = this.userRemoveIds.indexOf(program.id);
                (index > -1) ? ids.splice(index, 1) : ids.push(program.id);

                this.userRemoveIds = ids;
            },
            isProgramHidden (program) {
                return this.userRemoveIds.find(id => id === program.id) !== undefined;
            },
            saveUserProgram (weekNo, name) {
                if (!name) return false;
                this.userPrograms.push({
                    week_no: weekNo,
                    name: name,
                    keyword: name,
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