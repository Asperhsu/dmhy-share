export const weekNames = [
    '週日',
    '週一',
    '週二',
    '週三',
    '週四',
    '週五',
    '週六',
];

export const programsByWeek = (programs) => {
    let programsByWeek = {};

    // init
    weekNames.map((name, no) => {
        programsByWeek[no] = [];
    });

    programs.map(program => {
        programsByWeek[program.week_no].push(program);
    });
    return programsByWeek;
}