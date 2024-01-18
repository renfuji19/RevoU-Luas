let luasPersegi = 0; // variabel untuk menyimpan luas persegi
let kelilingPersegi = 0; // variabel untuk menyimpan keliling persegi

function hitung() {
  let sisi = parseInt(document.getElementById("sisi").value);
  luasPersegi = sisi * sisi;
  document.getElementById("outputText").innerHTML = "Luas: " + luasPersegi;
}

function hitungKeliling() {
  let sisi = parseInt(document.getElementById("sisi").value);
  kelilingPersegi = 4 * sisi;
  document.getElementById("outputText").innerHTML = "Keliling: " + kelilingPersegi;
}

