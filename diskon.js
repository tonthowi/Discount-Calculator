// Discount Counter dengan function



document.getElementById("submitBtn").addEventListener("click", function(){
    var harga = document.getElementById("harga").value;
    var diskon = document.getElementById("diskon").value;
    hargaDiskon(harga, diskon); 

    function hargaDiskon(hargaAwal, diskon) {
        var potonganHarga = Math.floor(( hargaAwal * diskon) /100);
        var hargaAkhir = Math.floor(hargaAwal - potonganHarga);
        document.getElementById("harga-awal").innerHTML = hargaAwal;
        document.getElementById("jumlah-diskon").innerHTML = diskon.toLocaleString();
        document.getElementById("potongan-harga").innerHTML = potonganHarga.toLocaleString();
        document.getElementById("harga-akhir").innerHTML = hargaAkhir.toLocaleString();
    };
 
});



