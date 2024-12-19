import express from 'express';
import { showProduk, showProdukById, createProduk, updateProduk, deleteProduk } from '../controllers/produk.js';
const router = express.Router();

router.get('/produk', showProduk);

router.get('/produk/:id', showProdukById)

router.post('/produk', createProduk)

router.put('/produk/:id', updateProduk)

router.delete('/produk/:id', deleteProduk)

export default router;


