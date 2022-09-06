import express from 'express'
import { createPedido,  getAllPedidos, getPedido } from '../controllers/BlogController.js'

const router = express.Router()

router.post('/compra', createPedido)
router.get('/compra', getAllPedidos)
router.get('/compra/:id', getPedido)


export default router