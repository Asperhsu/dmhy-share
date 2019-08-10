<template>
    <div class="card mb-0">
        <div class="card-header d-flex align-items-center">
            來源資料
            <div class="ml-auto">
                <button type="button" class="btn btn-sm btn-primary" @click="create"><i class="fa fa-plus"></i></button>
            </div>
        </div>

        <table class="table table-striped mb-0">
            <thead>
                <tr>
                    <th>Season</th>
                    <th>Title</th>
                    <th>Url</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="source in sources" :key="source.id">
                    <td v-text="source.season"></td>
                    <td v-text="source.title"></td>
                    <td v-text="source.url"></td>
                    <td>
                        <div class="ml-auto btn-group btn-group-sm" role="group">
                            <button type="button" class="btn btn-success" @click="edit(source)"><i class="fa fa-pen"></i></button>
                            <button type="button" class="btn btn-danger" @click="destroy(source)"><i class="fa fa-trash"></i></button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <modal v-model="showModal" size="lg" @ok="modalClose">
            <template v-slot:header>
                <h5 class="modal-title">來源</h5>
            </template>
            <template v-slot:body>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Season</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="formData.season">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Title</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="formData.title">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Url</label>
                    <div class="col-sm-10">
                        <input type="url" class="form-control" v-model="formData.url">
                    </div>
                </div>
            </template>
        </modal>
    </div>
</template>

<script>
    import {db} from '@/db.js';
    import Modal from '@/components/Modal';

    export default {
        components: { Modal },

        data () {
            return {
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
            modalClose () {
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
