// Code your solution in this file!
const distanceFromHqInBlocks = someValue => {
return Math.abs(someValue - 42);
}

const distanceFromHqInFeet = someValue => {
    return distanceFromHqInBlocks(someValue) * 264;
}

const distanceTravelledInFeet = (start, destination) => {
    let result = Math.abs((destination - start) * 264);
    return result;
}

const calculatesFarePrice = (start, destination) => {
    let result = Math.abs((destination - start) * 264);
    if (result <= 400) {
        return 0;
    } else if (result > 400 && result <= 2000) {
        return (result - 400) * 0.02;
    } else if ( result > 2000 && result < 2500) {
        return 25;
    } else if (result >= 2500) {
        return 'cannot travel that far';
    }
};