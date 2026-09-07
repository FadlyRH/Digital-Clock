function tampilkanjam(){
    const sekarang = new Date();
    
    //mengambil jam, menit dan detik dari objek date
    const jam = String(sekarang.getHours()).padStart(2, "0");
    const menit = String(sekarang.getMinutes()).padStart(2, "0");
    const detik = String(sekarang.getSeconds()).padStart(2, "0");

    //menampilkan jam, menit dan detik
    document.getElementById("jam").textContent = `${jam}:${menit}:${detik}`;

    //mengambil tanggal, bulan dan tahun dari object date
    const tanggal = sekarang.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    //menampilkan tanggal, bulan dan tahun
    document.getElementById("tanggal").textContent = tanggal;
}

//jalannkan fungsi fungsi tampilkanjam setiap 1 detik
setInterval(tampilkanjam, 1000);

//jalankan langsung saat halaman dimuat
tampilkanjam();

const quotes = [
    "Jangan pernah menyerah pada impianmu.",
    "Kesuksesan adalah hasil dari kerja keras dan ketekunan.",
    "Setiap hari adalah kesempatan baru untuk memulai lagi."
];

const randomquote = quotes[Math.floor(Math.random() * quotes.length)];

document.getElementById("quotes").textContent = randomquote;

