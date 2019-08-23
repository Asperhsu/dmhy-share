<template>
    <div class="program-item"
        :class="{hidden: isHidden}"
        v-show="show">
        <a href="#" class="text-truncate d-block p-1" :title="program.name" @click="$emit('show')">
            {{ program.name }}
        </a>

        <span v-if="!isHidden" class="toggle-btn text-secondary" @click="toggleHidden">
            <i class="fa fa-minus-circle"></i>
        </span>
        <span v-else class="toggle-btn text-success" @click="toggleHidden">
            <i class="fa fa-plus-circle"></i>
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            program: {
                type: Object,
                required: true,
            },
        },

        computed: {
            showHiddenProgram () { return this.$store.state.showHiddenProgram; },
            isHidden () { return this.$store.getters.isProgramHidden(this.program); },
            show () { return this.showHiddenProgram || !this.isHidden; },
        },

        methods: {
            toggleHidden () {
                this.$store.commit('toggleUserRemovedProgramId', this.program);
            },
        },
    }
</script>