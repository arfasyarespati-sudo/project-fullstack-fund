// Array berisi kumpulan kata-kata motivasi atau quotes
const quotes = [
    "Mulai aja dulu. Langkah pertama selalu yang terberat.",
    "Kesalahan kemarin adalah pelajaran untuk hari ini.",
    "Konsistensi lebih penting daripada intensitas yang meledak-ledak.",
    "Coding itu maraton, bukan sprint. Jaga ritme belajarmu.",
    "Jangan takut eror, karena dari eror kita belajar cara yang benar."
];

function dapatkanQuoteAcak() {
    const indeksAcak = Math.floor(Math.random() * quotes.length);
    
    const quoteHariIni = quotes[indeksAcak];
    
    console.log("=== QUOTE HARI INI ===");
    console.log(`"${quoteHariIni}"`);
    console.log("======================");
}

dapatkanQuoteAcak();