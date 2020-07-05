// Discount Counter dengan function

document.getElementById("submitBtn").addEventListener("click", function(){
    var harga = document.getElementById("harga").value;
    var diskon = document.getElementById("diskon").value;
    hargaDiskon(harga, diskon);
 
});

// Disocunt formula function
function hargaDiskon(harga, diskon) {
    var potonganHarga = Math.floor(( harga * diskon) /100);
    var hargaAkhir = Math.floor(harga - potonganHarga);
    var harga = hargaAkhir + potonganHarga;

    // Condition without input harga
    if (harga > 0) {

        document.getElementById("harga-awal").innerHTML = 'IDR '+ harga.toLocaleString();
        document.getElementById("potongan-harga").innerHTML = 'IDR '+ potonganHarga.toLocaleString();
        document.getElementById("harga-akhir").innerHTML = 'IDR '+ hargaAkhir.toLocaleString();

    } else {

        document.getElementById("harga-awal").innerHTML = 'Belum memasukkan harga';

    }

    // Condition without input diskon
    if (diskon > 0) {

        document.getElementById("jumlah-diskon").innerHTML = diskon +' %';

    } else {

        document.getElementById("jumlah-diskon").innerHTML = 'Tanpa potongan harga';
    }

};





