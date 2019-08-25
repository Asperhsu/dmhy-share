<template>
    <div class="program-container list-group-item collapse"
        :class="{show: activeWeekNo == weekNo}"
        v-if="programs.length">

        <program-item
            v-for="(program, index) in programs" :key="index"
            :program="program"
            @show="gotoProgram(program)"
        ></program-item>

        <user-program
            :weekNo="weekNo"
            @show="gotoProgram(program)"
        ></user-program>
    </div>
</template>

<script>
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
        },

        computed: {
            activeWeekNo () { return this.$store.state.activeWeekNo; },
            autoClose () { return this.$store.state.autoClose; },
        },

        methods: {
            gotoProgram (program) {
                if (this.$route.name !== 'program' || this.$route.query.keyword !== program.keyword) {
                    this.$router.push({name: 'program', query: {keyword: program.keyword }});
                    this.autoClose && this.$store.commit('toggleDrawer', false);
                }
            },
        },
    }
</script>

<style>
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