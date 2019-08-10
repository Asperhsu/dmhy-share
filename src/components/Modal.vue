<template>
    <div class="modal fade" :class="{show: show}" :style="{display: show ? 'block' : 'none'}" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered" :class="size ? 'modal-' + size : null" role="document">
            <div class="modal-content">
                <div class="modal-header bg-dark text-white">
                    <slot name="header"></slot>

                    <button type="button" class="close text-white" @click="show = false">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>

                <div class="modal-body">
                    <slot name="body"></slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value', 'size'],

        data () {
            return {
                show: !!this.value,
            };
        },

        watch: {
            value (value) {
                this.show = value;
            },
            show (value) {
                this.$emit('input', value);
            },
        },

        methods: {
            ok () {
                this.$emit('ok');
            }
        },
    }
</script>

<style>
    .modal {
        padding-right: 15px;
        background-color: rgba(0, 0, 0, .5);
    }
</style>