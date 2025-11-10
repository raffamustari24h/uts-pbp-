let lahan = [
  ["subur", "kering", "subur", "subur"],
  ["subur", "kering", "kering", "kering"],
  ["tandus", "subur", "subur", "subur"],
  ["kering", "kering", "tandus", "tandus"]
];

let cuaca = {
  suhu: 28,
  kelembapan: 60,
  angin: 10
};

for (let i = 0; i < lahan.length; i++) {
  let baris = lahan[i];
  let jumlahSubur = 0;
  for (let j = 0; j < baris.length; j++) {
    if (baris[j] === "subur") jumlahSubur++;
  }
  let persentaseSubur = (jumlahSubur / baris.length) * 100;
  if (persentaseSubur < 50) {
    for (let j = 0; j < baris.length; j++) {
      lahan[i][j] = "kering";
    }
  }
}

let totalSubur = 0;
for (let i = 0; i < lahan.length; i++) {
  for (let j = 0; j < lahan[i].length; j++) {
    if (lahan[i][j] === "subur") totalSubur++;
  }
}

let cuacaCocok =
  cuaca.suhu >= 20 && cuaca.suhu <= 30 &&
  cuaca.kelembapan > 50 &&
  cuaca.angin < 15;

let totalDitanami = cuacaCocok ? totalSubur : 0;

console.log("=== HASIL PEMERIKSAAN PERKEBUNAN ===");
console.log("Total petak subur:", totalSubur);
console.log("Total petak yang ditanami:", totalDitanami);
if (!cuacaCocok) console.log(" Cuaca tidak cocok untuk bercocok tanam!");
else console.log("Cuaca cocok untuk bercocok tanam.");
