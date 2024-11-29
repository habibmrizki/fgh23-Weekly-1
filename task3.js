function printSquare(size) {
  // Cek apakah input adalah angka
  if (isNaN(size)) {
    console.log("Data yang dimasukkan harus angka");
    return; // Keluar dari fungsi jika bukan angka
  }

  // Pastikan ukuran persegi adalah bilangan bulat positif
  size = Math.floor(size);
  if (size <= 0) {
    console.log("Ukuran persegi harus lebih dari 0");
    return;
  }

  // Looping untuk mencetak setiap baris
  for (let i = 1; i <= size; i++) {
    let row = "";
    // Looping untuk mencetak setiap angka pada baris
    for (let j = 1; j <= size; j++) {
      row += j;
    }
    console.log(row);
  }
}

// Contoh penggunaan
printSquare(5);
printSquare(3);
printSquare("a"); // Akan menampilkan pesan kesalahan
