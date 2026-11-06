$(document).ready(function() {
    let display = $('#display');

    // Ketika tombol angka atau titik diklik
    $('.btn').not('.clear, .equal').click(function() {
        let nilai = $(this).text();
        display.val(display.val() + nilai);
    });

    // Tombol C (Clear) untuk menghapus layar
    $('.clear').click(function() {
        display.val('');
    });

    // Tombol = (Sama dengan) untuk menghitung hasil
    $('.equal').click(function() {
        try {
            // eval() digunakan untuk menghitung string matematika dengan mudah ala pemula
            let hasil = eval(display.val());
            display.val(hasil);
        } catch (error) {
            display.val('Error');
        }
    });
});