<template>
    <div class="user-program-container">
        <div class="program-item"
            v-for="(program, index) in programs" :key="index">
            <a href="#" class="text-truncate d-block p-1" :title="program.name" @click.prevent="$emit('show')" >
                <i class="fa fa-child"></i> {{ program.name }}
            </a>
            <span class="toggle-btn text-danger" @click="remove(program)">
                <i class="fa fa-times-circle"></i>
            </span>
        </div>

        <div class="program-item py-2">
            <i class="ml-2 fa fa-plus"></i>
            <input type="text" class="ml-2 form-control form-control-sm" v-model="name" placeholder="自定義番組">
            <button class="ml-2 btn btn-sm btn-success" @click="add"><i class="fa fa-save"></i></button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            weekNo: {
                type: Number,
                required: true,
            },
        },

        data () {
            return {
                name: null,
            }
        },

        computed: {
            programs () { return this.$store.getters.userWeekdayPrograms(this.weekNo); },
        },

        methods: {
            add () {
                if (!this.name) return false;

                this.$store.commit('toggleUserProgram', {
                    week_no: this.weekNo,
                    name: this.name,
                    keyword: this.name,
                });
            },
            remove(program) {
                this.$store.commit('toggleUserProgram', program);
            },
        },
    }
</script>

<style scoped>
    .program-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>