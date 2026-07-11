// Array berisi kumpulan kata-kata motivasi atau quotes
const quotes = [
    "Mulai aja dulu. Langkah pertama selalu yang terberat.",
    "Kesalahan kemarin adalah pelajaran untuk hari ini.",
    "Konsistensi lebih penting daripada intensitas yang meledak-ledak.",
    "Coding itu maraton, bukan sprint. Jaga ritme belajarmu.",
    "Jangan takut eror, karena dari eror kita belajar cara yang benar."
];

function dapatkanQuoteAcak() {
    // Generate indeks acak dari 0 sampai (panjang array - 1)
    const indeksAcak = Math.floor(Math.random() * quotes.length);
    
    // Ambil quote berdasarkan indeks acak tersebut
    const quoteHariIni = quotes[indeksAcak];
    
    console.log("=== QUOTE HARI INI ===");
    console.log(`"${quoteHariIni}"`);
    console.log("======================");
}

// Jalankan fungsi beberapa kali untuk melihat hasilnya berubah-ubah
dapatkanQuoteAcak();