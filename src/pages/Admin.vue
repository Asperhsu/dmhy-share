<template>
    <div class="admin p-3" style="padding-left: 120px !important;">
        <source-panel class="mb-4"></source-panel>

        <program-panel class="mb-4"></program-panel>
    </div>
</template>

<script>
    import SourcePanel from '@/components/admin/SourcePanel';
    import ProgramPanel from '@/components/admin/ProgramPanel';

    export default {
        components: { SourcePanel, ProgramPanel },
    }
</script>

<style scoped>
    .admin {
        overflow: auto;
        height: 100vh;
    }
</style>


