// ##menghitung durasi dan jumlah video##


//ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));


// pilih yang hanya menggunakan judul "JAVASCRIPT LANJUTAN"
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing masing video
    .map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu => {
        const parts = waktu.split(':') .map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1]

    })
// jumlahkan semua detik
    .reduce((total, detik) => total + detik);

//ubah formatnya menjadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan ke dom
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`;

const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJumlVideo = document.querySelector('.jumlah-video');
pJumlVideo.textContent = `${jmlVideo} video.`;

// =====================================================================================================

// HTML

// <!-- <h3>My Videos</h3>
//   <ul>
//     <li data-duration="15:27">Teknik Pomodoro</li>
//     <li data-duration="11:18">JAVASCRIPT LANJUTAN | Higher Order Functions</li>
//     <li data-duration="21:40">JAVASCRIPT LANJUTAN | This pada Arrow Function</li>
//     <li data-duration="19:38">Website Penipu</li>
//     <li data-duration="12:10">JAVASCRIPT LANJUTAN | Arrow Function</li>
//     <li data-duration="20:43">JAVASCRIPT LANJUTAN | Closure</li>
//     <li data-duration="14:30">#TANYAPADIKA EP005</li>
//     <li data-duration="26:38">JAVASCRIPT LANJUTAN | Execution Context</li>
//     <li data-duration="17:33">JAVASCRIPT LANJUTAN | Prototype</li>
//     <li data-duration="10:39">JAVASCRIPT LANJUTAN | Object.create()</li>
//     <li data-duration="17:31">JAVASCRIPT LANJUTAN | Object (Revisited)</li>
//     <li data-duration="14:25">5 Tips Bertanya Ketika Error</li>
//   </ul>

//   <h3>My Playlist</h3>
//   <ol>
//     <li>
//       <h4>Javascript Lanjutan</h4>
//       <p>Jumlah Video : <span class="jumlah-video"></span></p>
//       <p>Total Durasi : <span class="total-durasi"></span></p>
//     </li>
//   </ol> -->

