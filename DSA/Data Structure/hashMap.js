const hashMap = new Map();

hashMap.set('nama', 'okta')
hashMap.set('age', 21)
hashMap.set('isMarriage', false)


console.log("name:", typeof(hashMap.get('nama'))) // untuk mengambil value dari kunci = mengembalikan kunci dan value (string)

console.log('has age:', hashMap.has('age')) // untuk memeriksa ada kunci ... = mengembalikan boolean

hashMap.delete('isMarriage')
console.log('after delete map', typeof(hashMap)); // hanya ada nama dan age // mengembalikan map object

hashMap.forEach((value, index) => { // iterasi untuk key dan value 
    console.log(`${index}: ${value}`)
})

// penjelasan

// bucket = menjadi wadah bagi pasangan key dan value
// bucket = ditentukan dari nilai hash yang unik dari key
// maka hashmap akan langsung mendapatkan hashnya jika sesuai maka langsung (direct access)
// jika terjadi double/lebih data di dalam bucket maka hashmap akan menghitung 1 per 1 hashnya mana yang sesuai

// bucket = direct access
// data dalam bucket = sequential access