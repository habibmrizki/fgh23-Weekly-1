const totalBelanja = 600000;

let diskon = 0;
if (totalBelanja >= 1000000) {
  diskon = 10;
} else if (totalBelanja >= 500000) {
  diskon = 5;
}

const totalBayar = totalBelanja - (totalBelanja * diskon) / 100;

console.log(
  `Anda mendapatkan diskon ${diskon}%, total belanja Anda menjadi Rp ${totalBayar}`
);
