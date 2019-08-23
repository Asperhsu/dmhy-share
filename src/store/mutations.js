export default {
    // drawer
    toggleDrawer (state, visible = null) {
        let openState = visible === null ? !state.drawerOpen : !!visible;
        state.drawerOpen = openState;
    },
    autoClose (state, value) {
        state.autoClose = !!value;
    },

    // programs
    activeSession (state, value) {
        state.activeSession = value;
    },
    activeWeekNo (state, value) {
        state.activeWeekNo = value;
    },
    showHiddenProgram (state, value) {
        state.showHiddenProgram = !!value;
    },
    toggleUserRemovedProgramId (state, program) {
        let ids = state.userRemovedProgramIds.concat();
        let index = state.userRemovedProgramIds.indexOf(program.id);

        (index > -1) ? ids.splice(index, 1) : ids.push(program.id);
        state.userRemovedProgramIds = ids;
    },
    toggleUserProgram (state, program) {
        let programs = state.userPrograms.concat();
        let index = programs.findIndex(prog => {
            return prog.week_no === program.week_no && prog.name === program.name;
        });

        (index > -1) ? programs.splice(index, 1) : programs.push(program);
        state.userPrograms = programs;
    },
}