// Code your solution in this file!
const returnFirstTwoDrivers = anArray => {
    return anArray.slice(0, 2)
}

const returnLastTwoDrivers = anArray => {
    return anArray.slice(anArray.length - 2, anArray.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(anInteger) {
    return function (fare) {
        return fare = fare * anInteger;
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(anArray, aFunction) {
    return aFunction(anArray);
}

/*
+ `selectDifferentDrivers()` — This function takes two arguments, an array of
  `drivers` and either the `returnFirstTwoDrivers()` or `returnLastTwoDrivers()`
  function. Based on these two arguments, `selectDifferentDrivers()` will return
  either the first two drivers or the last two drivers.
*/


