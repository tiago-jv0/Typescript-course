const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

//Help with inference when extracting values

const [car1, car2, car3] = carMakers;

//Prevent incompatible values

// carMakers.push(100);

// Help with 'map';

carMakers.map((car: string): string => car);

// Flexibes types

const importantDates: (Date | string)[] = [];
// const importantDates: Array<Date | string> = [];
