// Code your solution in this file!
const refStreet = 42;
function distanceFromHqInBlocks(num){
    return Math.abs(refStreet - num);
}

function distanceFromHqInFeet(num){
    return (Math.abs(refStreet - num)*264);

}
function distanceTravelledInFeet(d1,d2){
    return (Math.abs(d1 - d2)*264);
}
function calculatesFarePrice(start,dst){
    const distance = (Math.abs(start - dst)*264);
    let price =0;
    if(distance <= 400){
        return 0;
    }
    else if(distance>400 && distance<2000){
        return 0.02 * (distance-400);
    }
    else if(distance >=2000 && distance < 2500){
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}