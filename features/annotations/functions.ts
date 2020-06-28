const add = (a: number, b: number): number => a + b;

function subtract(a: number, b: number): number {
  return a - b;
}

const divide = function (a: number, b: number): number {
  return a / b;
};

const multiply = (a: number, b: number): number => a * b;

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): void  => {
  if (!message) throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date, weather);
};

logWeather(todaysWeather);
