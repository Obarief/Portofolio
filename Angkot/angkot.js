//membuat objek angkot
// nama function kapital agar sebagai standar pembuatan constructor
 function Angkot(sopir, tujuan, penumpang, kas){
    this.sopir = sopir;
    this.tujuan = tujuan;
    this.penumpang = penumpang;
    this.kas = kas;

    // this =  digunakan seperti untuk membuat variabel baru dan mengembalikannya sekaligus
    // contoh = var sopir = this.sopir; --------- return sopir;

// method penumpang naik
    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang; // return this.penumpang karena ada nilai yang di inputkan dan harus di keluarkan
    }

// method untuk penumpang turun
    this.penumpangTurun = function(namaPenumpang, bayar){
        if( this.penumpang.length === 0){
            console.log('Angkot masih kosong!');
            return false; // false agar langsung keluar dari kondisi, karena tidak ada nilai yang harus di kembalikan
        }

// properti untuk bayar
        // melihat seluruh penumpang yang ada satu per satu dari yang paling awal ke akhir
        for(var i = 0; i < this.penumpang.length; i++){
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang
            }
        }
    }


 }

 // untuk membuat berapa banyak angkot dan melihat data dari masing masing angkot
 var angkot1 = new Angkot('Oktavari', ['kramat jati', 'pasar induk'], [], 0); // sopir dan tujuan sudah di isi secara defaut atau dapat diganti dengan yang lain namun harus membuat fungsi untuk mengisi sopir yang akan menyetir

 var angkot2 = new Angkot('Arsya', ['dayeuh', 'tapos'], [], 0);

 // pemanggilan untuk mengisi angkot1 = (angkot1.penumpangNaik()), (angkot1.penumpangTurun( , ))
 // lalu untuk melihat hasilnya yaitu dengan = (angkot1), untuk melihat lebih spesifik maka dengan (angkot1.kas) dll