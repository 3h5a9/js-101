'use strict';

// Functions
function fruitProcessor(apples, oranges) {
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`
	console.log(juice);
}
fruitProcessor(3, 5);


// Functions Example Two
function carCompany(name1, name2, name3){
	const carcomp = `These are the three best companies: ${name1}, ${name2}, ${name3}`;
	return carcomp;
}
const carresult = carCompany('Hunday', 'Honda', 'RolceRoyce');
console.log(carresult);


// Functions Example Three
function tempLastSixDays(mon, twe, wed, thur, fri, sat, sun){
	console.log(`Temprature forcast for the next six days in uk: `);
	const result = `Monday: ${mon}, Tuesday: ${twe}, Wednasday: ${wed}, Thursday: ${thur}, Friday: ${fri}, Satarday: ${sat} and Sunday: ${sun} degree farenhight.`;
	return result;
}

const outcome = tempLastSixDays(38.5, 46.6, 45.7, 42.6, 49.1, 54.1, 52.7);
console.log(outcome);