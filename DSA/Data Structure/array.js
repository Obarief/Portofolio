

const fruit = ['banana', 'apple', 'strawberry', ['jeruk', 'mangga']];

console.log(fruit[3][0]); // jeruk

fruit.push('jambu')
fruit.push('kelengkeng')

console.log(fruit) // tambahan jambu dan kelengkeng dibelakang

fruit.pop()

console.log(fruit) // menghilangkan kelengkeng

fruit.forEach((fruit, index) => {
    console.log(`fruit at index ${index}: ${fruit}`) // iterasi semua isi array 
})


// penjelasan
// array itu berurutan di memory
// ketika ingin mengambil array maka akan dihitung dengan rumus
// rumus = alamat awal + (index * ukuran elemen)
// otomatis$ alamat awal = pada memory
// inputan$ index = yang disebutkan ketika ingin mengambil data
// sesuai tipe data$ ukuran element = jika integer maka 4 byte, maka seterusnya kelipatan 4
// dapat disebut dengan direct access
// cocok untuk sebuah nilai pasti (nilai ujian, nilai statistik)

// studi kasus untuk menemukan angka 30 (dengan input index ke 2)

// 10 di alamat 10
// 20 di alamat 14
// 30 di alamat 18

// alamat = 10 + (2 * 4) = 18