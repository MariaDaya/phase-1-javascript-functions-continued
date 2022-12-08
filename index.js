// code your solution here
function saturdayFun(activity= 'roller-skate'){
    return (`This Saturday, I want to ${activity}!`)
};

const mondayWork = function (activity ='go to the office'){
    return (`This Monday, I will ${activity}.`)
};
mondayWork ('work from home');

function wrapAdjective(def='*'){
    return function (adj='special'){
      return (`You are ${def}${adj}${def}!`)
    }
    
}
