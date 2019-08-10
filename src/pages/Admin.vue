<template>
    <div class="m-3" style="margin-left: 120px !important;">
        <current-season class="mb-3"></current-season>

        <source-panel class="mb-3"></source-panel>
    </div>
</template>

<script>
    import CurrentSeason from '@/components/admin/CurrentSeason';
    import SourcePanel from '@/components/admin/SourcePanel';
    // import ProgramPanel from '@/components/admin/ProgramPanel';
    // import {db} from '@/db.js';

    export default {
        components: { CurrentSeason, SourcePanel },

        data () {
            return {
                current: {},
            };
        },

        firestore: {
            // current: db.collection('settings').doc('current'),
        },
    }
</script>


