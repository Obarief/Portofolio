import db from '../config/database.js'

export const getProduk = (hasil) => {
    db.query("SELECT * FROM produk", (err, results) => {
        if (err) {
            console.log(err)
            hasil(err, null)
        } else {
            hasil(null, results)
        }
    })
}

export const getProdukById = (id, hasil) => {
    db.query("SELECT * FROM produk WHERE produk_id = ?", [id], (err, results) => {
        if (err) {
            console.log(err)
            hasil(err, null)
        } else {
            hasil(null, results[0])
        }
    })
}

export const insertProduk = (data, hasil) => {
    db.query("INSERT INTO produk SET = ?", [data], (err, results) => {
        if (err) {
            console.log(err)
            hasil(err, null)
        } else {
            hasil(null, results)
        }
    })
}

export const updateProdukById = (id, data, hasil) => {
    db.query("UPDATE produk SET produk_nama = ?, produk_harga = ? WHERE produk_id = ?", [data.produk_nama, data.produk_harga, id], (err, results) => {
        if (err) {
            console.log(err)
            hasil(err, null)
        } else {
            hasil(null, results)
        }
    })
}

export const deleteProdukById = (id, hasil) => {
    db.query("DELETE FROM produk WHERE produk_id = ?", [id], (err, results) => {
        if (err) {
            console.log(err)
            hasil(err, null)
        } else {
            hasil(null, results)
        }
    })
}