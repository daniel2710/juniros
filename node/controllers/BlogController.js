// Importamos el Modelo
import BlogModel from '../models/BlogModel.js'

//**METODOS**/
//Mostras todos los registros
export const getAllPedidos =  async (req, res) => {
    try {
        const pedidos = await  BlogModel.findAll()
        res.json(pedidos)
    } catch (error) {
        res.json ({message: error.message})
    }
}

//Mostrar un solo registro en especifico
export const getPedido = async ( req, res) => {
    try {
       const pedido = await BlogModel.findAll({
            where:{id:req.params.id}
        })
        res.json(pedido[0])
    } catch (error) {
        res.json ({message: error.message})
    }
}

//Crear pedido
export const createPedido = async (req, res) => {
    try {
        await  BlogModel.bulkCreate(req.body)
        res.json({
            "message":"¡Pedido generado"
        })
    } catch (error) {
        res.json ({message: error.message})
    }
}