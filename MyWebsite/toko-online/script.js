document.addEventListener('DOMContentLoaded', function() {
    const productButtons = document.querySelectorAll(".add-to-cart");

    productButtons.forEach(cartButton => {
        let isAdded = false; 

        cartButton.addEventListener("click", function(e) {
            e.preventDefault();

            if (!isAdded) {
                // Efek saat produk dimasukkan ke keranjang
                this.innerText = 'X Remove';
                this.style.backgroundColor = 'red'; 
                alert('Produk telah ditambahkan ke keranjang belanja.');
                isAdded = true;
            } else {
                // Efek saat produk dihapus dari keranjang
                this.innerText = 'Add to Cart';
                this.style.backgroundColor = 'darkblue';
                alert('Produk berhasil dihapus dari keranjang pembelian.');
                isAdded = false;
            }
        });
    });
});