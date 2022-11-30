// code your solution here
function saturdayFun(String="roller-skate") {
    return `This Saturday, I want to ${String}!`;
}

saturdayFun();

function mondayWork(work="go to the office") {
    return `This Monday, I will ${work}.`;
}
mondayWork();

function wrapAdjective(msg='*') {
    return function inner(String="special") {
        return `You are ${msg}${String}${msg}!`
    }
}

wrapAdjective()();
