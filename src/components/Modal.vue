<template>
    <div class="modal fade" :class="{show: show}" :style="{display: show ? 'block' : 'none'}" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered" :class="size ? 'modal-' + size : null" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="header"></slot>

                    <button type="button" class="close" @click="show = false">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>

                <div class="modal-body">
                    <slot name="body"></slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer">
                        <div>
                            <button type="button" class="btn btn-primary mr-1" @click="ok">Save</button>
                            <button type="button" class="btn btn-secondary" @click="show = false">Close</button>
                        </div>
                    </slot>
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
                this.show = false;
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