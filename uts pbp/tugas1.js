// Fungsi untuk menghasilkan angka acak dalam rentang tertentu
function useRNG(max, offset = 0) {
  return Math.floor(Math.random() * max) + offset;
}

// Inisialisasi data
const kondisiLahan = ["subur", "kering", "tandus"];
const field = Array.from({ length: 4 }, () => []);
const weather = {};

// Membuat kondisi lahan secara acak
field.forEach((row, i) => {
  for (let j = 0; j < 4; j++) {
    const acak = useRNG(3);
    row[j] = kondisiLahan[acak];
  }
});

// Menghasilkan data cuaca acak
Object.assign(weather, {
  temp: useRNG(20, 15),
  humidity: useRNG(20, 40),
  windSpeed: useRNG(10, 10),
});

console.log("Kondisi Lahan:", field);
console.log("Cuaca Saat Ini:", weather);

// Logika utama: menghitung berapa banyak lahan yang bagus (subur)
let petakDiTanam = 0;
field.flat().forEach((lahan) => {
  if (lahan === "subur") petakDiTanam++;
});

console.log(`Jumlah lahan yang cocok ditanam: ${petakDiTanam}`);
