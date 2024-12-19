import { getProduk, getProdukById, insertProduk, updateProdukById, deleteProdukById } from "../models/produkModel.js";

export const showProduk = (req, res) => {
    getProduk((err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const showProdukById = (req, res) => {
    getProdukById(req.params.id, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const createProduk = (req, res) => {
    const data = req.body
    insertProduk(data, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const updateProduk = (req, res) => {
    const data = req.body
    const id = req.params.id
    updateProdukById(data, id, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const deleteProduk = (req, res) => {
    const id = req.params.id
    deleteProdukById(id, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}