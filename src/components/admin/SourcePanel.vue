<template>
    <div class="mb-0">
        <div class="d-flex align-items-center mb-2">
            <span class="fa-2x mr-2">
                <i class="fa fa-angle-down" v-if="show"></i>
                <i class="fa fa-angle-right" v-else></i>
            </span>

            <h4 class="mb-0 mr-2" @click="show = !show">來源資料</h4>
            <button type="button" class="btn btn-sm btn-primary" @click="create"><i class="fa fa-plus"></i></button>

            <div class="ml-auto">
                <span class="badge badge-pill badge-info" v-text="sources.length"></span>
            </div>
        </div>

        <table class="table table-striped mb-0 collapse" :class="{show: show}">
            <thead class="thead-dark">
                <tr>
                    <th class="fit">季度Slug</th>
                    <th class="fit">季度名稱</th>
                    <th>標題</th>
                    <th>網址</th>
                    <th class="fit">目前季度</th>
                    <th class="fit"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="source in sources" :key="source.id">
                    <td class="fit" v-text="source.season_slug"></td>
                    <td class="fit" v-text="source.season_name"></td>
                    <td v-text="source.title"></td>
                    <td v-text="source.url"></td>
                    <td class="fit text-center">
                        <i class="fa fa-check" v-if="source.active"></i>
                        <i class="fa fa-times" v-else></i>
                    </td>
                    <td class="fit">
                        <div class="ml-auto btn-group btn-group-sm" role="group">
                            <button type="button" class="btn btn-success" @click="edit(source)"><i class="fa fa-pen"></i></button>
                            <button type="button" class="btn btn-danger" @click="destroy(source)"><i class="fa fa-trash"></i></button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <form @submit.prevent="submitForm">
            <modal v-model="showModal" size="lg">
                <template v-slot:header>
                    <h5 class="modal-title">來源</h5>
                </template>
                <template v-slot:body>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">季度Slug</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" pattern="[a-z0-9-_]+" required v-model="formData.season_slug">
                            <div class="text-muted"><small>Pattern: [a-z0-9-_]+</small></div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">季度名稱</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" required v-model="formData.season_name">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">標題</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" required v-model="formData.title">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">網址</label>
                        <div class="col-sm-10">
                            <input type="url" class="form-control" required v-model="formData.url">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">目前季度</label>
                        <div class="col-sm-10">
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" name="active" class="custom-control-input" required
                                    id="activeRadioTrue" :value="true" v-model="formData.active">
                                <label class="custom-control-label" for="activeRadioTrue">
                                    <i class="fa fa-check"></i>
                                </label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" name="active" class="custom-control-input" required
                                    id="activeRadioFalse" :value="false" v-model="formData.active">
                                <label class="custom-control-label" for="activeRadioFalse">
                                    <i class="fa fa-times"></i>
                                </label>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-slot:footer>
                    <div class="text-right">
                        <button type="submit" class="btn btn-primary mr-1">Save</button>
                        <button type="button" class="btn btn-secondary" @click="showModal = false">Close</button>
                    </div>
                </template>
            </modal>
        </form>
    </div>
</template>

<script>
    import {db} from '@/db.js';
    import Modal from '@/components/Modal';

    export default {
        components: { Modal },

        data () {
            return {
                show: false,
                sources: {},
                showModal: false,

                formAction: null,
                editingId: null,
                formData: {},
            };
        },

        firestore: {
            sources: db.collection('sources'),
        },

        methods: {
            submitForm () {
                this.showModal = false;

                switch (this.formAction) {
                    case 'store': this.store(); break;
                    case 'update': this.update(); break;
                }

                this.editingId = null;
                this.formAction = null;
                this.formData = {};
            },
            create () {
                this.formAction = 'store';
                this.formData = {};
                this.showModal = true;
            },
            store () {
                this.$firestoreRefs.sources.add(this.formData);
            },
            edit (source) {
                this.editingId = source.id;
                this.formAction = 'update';
                this.formData = Object.assign({}, source);
                this.showModal = true;
            },
            update () {
                if (!this.editingId) { return; }

                this.$firestoreRefs.sources.doc(this.editingId).set(this.formData);
            },
            destroy (source) {
                if (window.confirm('Confirm Delete: ' + source.season)) {
                    this.$firestoreRefs.sources.doc(source.id).delete();
                }
            },
        },
    }
</script>
