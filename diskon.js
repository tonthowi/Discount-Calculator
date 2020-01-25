// Discount Counter dengan function

document.getElementById("submitBtn").addEventListener("click", function(){
    var harga = document.getElementById("harga").value;
    var diskon = document.getElementById("diskon").value;
    hargaDiskon(harga, diskon);
 
});

function hargaDiskon(harga, diskon) {
    var potonganHarga = Math.floor(( harga * diskon) /100);
    var hargaAkhir = Math.floor(harga - potonganHarga);
    var harga = hargaAkhir + potonganHarga;

    document.getElementById("harga-awal").innerHTML = 'IDR '+ harga.toLocaleString();
    document.getElementById("jumlah-diskon").innerHTML = diskon.toLocaleString() +' %';
    document.getElementById("potongan-harga").innerHTML = 'IDR '+ potonganHarga.toLocaleString();
    document.getElementById("harga-akhir").innerHTML = 'IDR '+ hargaAkhir.toLocaleString();
};





