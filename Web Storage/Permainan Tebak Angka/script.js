// Board 1 identifier
const pesan1 = document.getElementById('pesan1')
const tombolBermain = document.getElementById('bermain')

// Board 2 identifier
const hitunganTebakan = document.getElementById('hitunganTebakan')

const hitunganSalahTerbanyak = document.getElementById('hitunganSalahTerbanyak')

const hapus = document.getElementById('hapus')

// Board 3 identifier
const hitunganSalahSession = document.getElementById('hitunganSalahSession')




// board 1 logic
tombolBermain.addEventListener('click', function() {
    pesan1.innerHTML = 'Silahkan menebak angka!'
    const pesan11 = document.createElement('p')
    pesan11.innerHTML = <p>Jawaban anda adalah:</p>
    document.body.appendChild(pesan11)
})