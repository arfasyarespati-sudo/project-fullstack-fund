$(document).ready(function() {
    let display = $('#display');

    $('.btn').not('.clear, .equal').click(function() {
        let nilai = $(this).text();
        display.val(display.val() + nilai)
    });

    $('.clear').click(function() {
        display.val('');
    });

    $('.equal').click(function() {
        try {
            let hasil = eval(display.val());
            display.val(hasil);
        } catch (error){
            display.val('Error')
        }
    });
});