const useRNG = (n, j = 0) => Math.floor(Math.random() * n) + j;
const field = Array.from({ length: 4 }, () => []);
const fieldDataPossibility = ["subur", "kering", "tandus"];
const weather = {};


for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    field[i][j] = fieldDataPossibility[useRNG(3)];
  }
}


Object.assign(weather, {
  temp: useRNG(20, 15),
  humidity: useRNG(20, 40),
  windSpeed: useRNG(10, 10),
});


let fertile = 0;

field.forEach((row) => {
  const fertileCount = row.filter((plot) => plot === "subur").length;
  if (fertileCount >= 2) fertile += fertileCount;
});


const weatherLogic =
  weather.temp >= 20 &&
  weather.temp <= 30 &&
  weather.humidity > 50 &&
  weather.windSpeed < 15;


console.log("Hasil perhitungan :");
console.log(field);
console.log(weather);
console.log(`Total petak subur : ${fertile}`);
console.log(
  `Total petak ditanam : ${weatherLogic ? fertile : 0}`
);
console.log(
  weatherLogic
    ? "Cuaca cocok untuk bercocok bertanam"
    : "Cuaca tidak cocok untuk bercocok bertanam"
);
