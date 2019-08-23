<template>
    <div class="program-item" :class="{hidden: hidden}">
        <a href="#" class="text-truncate d-block p-1" :title="program.name" @click="$emit('show')">
            {{ program.name }}
        </a>

        <span v-if="!hidden" class="toggle-btn text-secondary" @click="$emit('toggleHidden')">
            <i class="fa fa-minus-circle"></i>
        </span>
        <span v-else class="toggle-btn text-success" @click="$emit('toggleHidden')">
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
            hidden: {
                type: Boolean,
                default: false,
            },
        },
    }
</script>