import {programsByWeek} from '@/weeknames.js';

export default {
    isProgramHidden (state) {
        return (program) => {
            return state.userRemovedProgramIds.find(id => id === program.id) !== undefined;
        };
    },
    userWeekdayPrograms (state) {
        return (weekNo) => {
            let programsWeek = programsByWeek(state.userPrograms);
            return programsWeek[weekNo] || [];
        };
    }
}