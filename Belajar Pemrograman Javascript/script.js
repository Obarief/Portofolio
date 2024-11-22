// const server = Bun.serve({
//     port: 3000,
//     fetch(request) {
//         return new Response('Hello World')
//     }
// })

// console.log(`Server running at http://localhost:${server.port}`)

// const currency = "IDR"

// let value = 10000

// value += 5000

// const money = `${currency} ${value}`

// console.log(money)



// first-class citizen

// const apalah = function (x) {
//     return function(num){
//         return x + num
//     }
// }

// const ayo = apalah(2)

// console.log(ayo(10))


// arrow function

// const tambah = (x) => {
//     return x * 10
// }

// const hasil = tambah(2)

// console.log(hasil)


const hello = (name, origin = "Bandung") => {
    return `Halo! Nama saya ${name}, saya tinggal di ${origin}`
}

const rahmat = hello("Rahmat", "Semarang")
const indra = hello("Indra")

console.log(rahmat)
console.log(indra)