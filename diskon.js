// Discount Counter dengan function



document.getElementById("submitBtn").addEventListener("click", function(){
    var harga = document.getElementById("harga").value;
    var diskon = document.getElementById("diskon").value;

    function hargaDiskon(hargaAwal, diskon) {
        var potonganHarga =( hargaAwal * diskon) /100;
        var hargaAkhir = hargaAwal - potonganHarga;
        document.getElementById('hasil').innerHTML ='Dengan harga awal sebesar ' + hargaAwal + ' dan diskon sebesar ' + diskon + '% .Maka anda mendapatkan potongan harga sebesar ' + potonganHarga + '. Dan anda hanya membayar sebesar ' + hargaAkhir;
    }

    hargaDiskon(harga, diskon); 
});



// Discount Counter dengan Object dan Methods
// document.addEventListener('DOMContentLoaded', function() {
 
//     var hitungDiskon = {
//         hargaAwal:document.getElementsByClassName('inputForm'),
//         diskon: document.getElementsByClassName('inputForm'),
//         calcPotonganHarga : function() {
//             this.potonganHarga = (this.hargaAwal * this.diskon) / 100;
//             return this.potonganHarga;
//         },
//         calcHargaAkhir: function () {
//             this.hargaAkhir = this.hargaAwal - this.potonganHarga;
//             return this.hargaAkhir;
    
//         }
//     }
    
//     hitungDiskon.calcPotonganHarga();
//     hitungDiskon.calcHargaAkhir();
    
  
// });


