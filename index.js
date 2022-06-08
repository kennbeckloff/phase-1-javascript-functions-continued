// code your solution here
function saturdayFun (event ='roller-skate'){
    return `This Saturday, I want to ${event}!`; 
    
}
 saturdayFun("bathe my dog!");

// monday
function mondayWork (event = 'go to the office'){
    return `This Monday, I will ${event}.`;
}
mondayWork("Work from home");

// wrapadjective
const wrapAdjective = function (event = "*"){
    return function (dd = 'a dedicated programmer'){
        return `You are ${event}${dd}${event}!`;

    }
    
}