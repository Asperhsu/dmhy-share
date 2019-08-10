<template>
    <div class="mb-0">
        <div class="d-flex align-items-center mb-2">
            <span class="fa-2x mr-2">
                <i class="fa fa-angle-down" v-if="show"></i>
                <i class="fa fa-angle-right" v-else></i>
            </span>

            <h4 class="mb-0 mr-2" @click="show = !show">節目資料</h4>

            <div class="d-inline-block mr-2">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text">季度</label>
                    </div>
                    <select class="custom-select" v-model="activeSession">
                        <option v-for="(name, slug) in seasons" :key="slug" :value="slug" v-text="name"></option>
                    </select>
                </div>
            </div>

            <button type="button" class="btn btn-sm btn-primary" @click="create"><i class="fa fa-plus"></i></button>

            <div class="ml-auto">
                <span class="badge badge-pill badge-info" v-text="programs.length"></span>
            </div>
        </div>

        <div class="card collapse" :class="{show: show}">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item" v-for="(weekName, weekNo) in weekNames" :key="weekNo">
                        <a class="nav-link" href="#"
                            :class="{active: activeWeekNo == weekNo}"
                            @click.prevent="activeWeekNo = weekNo"
                            v-text="weekName"></a>
                    </li>
                </ul>
            </div>

            <table class="table table-striped mb-0">
                <thead class="thead-dark">
                    <tr>
                        <th class="fit">星期</th>
                        <th>名稱</th>
                        <th>關鍵字</th>
                        <th>季度</th>
                        <th class="fit"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="program in dayPrograms" :key="program.id">
                        <td class="fit" v-text="weekNames[program.week_no]"></td>
                        <td v-text="program.name"></td>
                        <td v-text="program.keyword"></td>
                        <td v-text="program.season_slugs.join(', ')"></td>
                        <td class="fit">
                            <div class="ml-auto btn-group btn-group-sm" role="group">
                                <button type="button" class="btn btn-success" @click="edit(program)"><i class="fa fa-pen"></i></button>
                                <button type="button" class="btn btn-danger" @click="destroy(program)"><i class="fa fa-trash"></i></button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <form @submit.prevent="submitForm">
            <modal v-model="showModal" size="lg">
                <template v-slot:header>
                    <h5 class="modal-title">節目</h5>
                </template>
                <template v-slot:body>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">星期</label>
                            <div class="col-sm-10 pt-2">
                                <div class="custom-control custom-radio custom-control-inline"
                                    v-for="(weekName, weekNo) in weekNames" :key="weekNo">
                                    <input type="radio" name="week_no" class="custom-control-input" required
                                        :id="`weekNoRadio${weekNo}`" :value="weekNo" v-model="formData.week_no">
                                    <label class="custom-control-label" :for="`weekNoRadio${weekNo}`" v-text="weekName"></label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">名稱</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" required v-model="formData.name">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">關鍵字</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" required v-model="formData.keyword">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">
                                季度
                                <button type="button" class="btn btn-sm btn-primary" @click="addSeason"><i class="fa fa-plus"></i></button>
                            </label>
                            <div class="col-sm-10">
                                <div class="d-flex align-items-center" v-for="(season, index) in formData.season_slugs" :key="index">
                                    <select class="form-control mr-2" v-model="formData.season_slugs[index]" required>
                                        <option v-for="source in sources" :key="source.id" :value="source.season_slug" v-text="source.season_name"></option>
                                    </select>
                                    <button type="button" class="btn btn-sm btn-warning" @click="formData.season_slugs.splice(index, 1)"><i class="fa fa-minus"></i></button>
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
    import weeknames from '@/weeknames.js';
    import Modal from '@/components/Modal';
    let defaultFormData = {
        week_no: (new Date).getDay(),
        name: null,
        keyword: null,
        season_slugs: [],
    };

    export default {
        components: { Modal },

        data () {
            return {
                show: true,
                weekNames: weeknames,
                activeWeekNo: (new Date).getDay(),
                activeSession: null,

                sources: [],
                programs: [],
                showModal: false,

                formAction: null,
                editingId: null,
                formData: defaultFormData,
            };
        },

        computed: {
            dayPrograms () {
                return this.programs.filter(program => program.week_no == this.activeWeekNo);
            },
            seasons () {
                let seasons = {};
                this.sources.map(source => {
                    seasons[source.season_slug] = source.season_name;
                });
                return seasons;
            },
        },

        watch: {
            sources (value) {
                let sources = value.filter(source => source.active);
                if (!sources.length) return;

                this.activeSession = sources[0].season_slug;
            },
            activeSession (value) {
                let programsRef = db.collection('programs').where("season_slugs", "array-contains", value);
                this.$bind('programs', programsRef);
            },
        },

        firestore: {
            sources: db.collection('sources'),
        },

        methods: {
            addSeason () {
                let seasonSlugs = this.formData.season_slugs.concat();
                seasonSlugs[seasonSlugs.length] = this.activeSession;
                this.formData.season_slugs = seasonSlugs;
            },
            submitForm () {
                this.showModal = false;

                // validate
                if (!this.formData.season_slugs.length) {
                    window.alert('季度不可空白');
                    this.showModal = true;
                    return;
                }

                let formData = Object.assign({}, this.formData);
                formData.season_slugs = formData.season_slugs.filter((season, index, season_slugs) => season_slugs.indexOf(season) === index);
                this.formData = formData;

                switch (this.formAction) {
                    case 'store': this.store(); break;
                    case 'update': this.update(); break;
                }

                this.editingId = null;
                this.formAction = null;
                this.formData = JSON.parse(JSON.stringify(defaultFormData));
                this.formData.week_no = this.activeWeekNo;
            },
            create () {
                this.formAction = 'store';
                this.formData = JSON.parse(JSON.stringify(defaultFormData));
                this.formData.week_no = this.activeWeekNo;
                this.showModal = true;
            },
            store () {
                db.collection('programs').add(this.formData);
            },
            edit (program) {
                this.editingId = program.id;
                this.formAction = 'update';
                this.formData = Object.assign({}, program);
                this.showModal = true;
            },
            update () {
                if (!this.editingId) { return; }

                db.collection('programs').doc(this.editingId).set(this.formData);
            },
            destroy (program) {
                if (window.confirm('Confirm Delete: ' + program.season)) {
                    db.collection('programs').doc(program.id).delete();
                }
            },
        },
    }
</script>
