
// FUNCTION: sayHello()
// Menampilkan pesan selamat datang dan mencatat aktivitas ke console

function sayHello() {
    console.time("f1"); // Mulai menghitung waktu eksekusi fungsi
    console.info("Info Time Terkini dari F1 >>");
    console.timeLog("f1"); // Menampilkan waktu berjalan sejak timer dimulai

    // Interaksi dengan pengguna
    alert("Hello, Selamat Datang!");
    let nama = prompt("Nama siapa?");
    confirm(nama + " klik tombol.");
    console.log(nama + " telah klik tombol.");

    // Hitung berapa kali tombol diklik
    console.count("submited");

    console.timeEnd("f1"); // Mengakhiri dan menampilkan total waktu eksekusi fungsi
}


// FUNCTION: resetCount()
// Mereset counter submit dan menampilkan pesan konfirmasi

function resetCount() {
    console.countReset("submited"); // Reset hitungan console.count
    alert("Button 'Submitted' telah di-reset.");
    console.info("Button reset berhasil.");
}


// LOGGING DASAR
console.warn("Ini contoh Warning");
console.error("Ini contoh Error");


// DATA USER (Simulasi respon API)
let userData = [
    { userId: "user123", loginStatus: "active", lastLogin: "2024-03-20" },
    { userId: "user456", loginStatus: "inactive", lastLogin: "2024-03-15" },
    { userId: "user45678", loginStatus: "inactive 001", lastLogin: "2024-03-15" },
];


// GROUPING LOG: Debugging hasil API
console.group("API Response Debug");
console.table(userData); // Menampilkan data dalam bentuk tabel di console
console.log("Status Code:", "Successful");
console.log("Response Time:", "200ms");
console.log("Payload Size:", "1.2KB");
console.groupEnd();



