const { Router } = require('express')
const { 
    getDataOrderByID,getDataOrder,updateOrder,patchOrder,deleteOrder
} = require('../Controler/order')

const router = Router()
const {authorization}=require('../Middleware/auth')

router.get('/:id', getDataOrderByID)
router.get('/', getDataOrder)
router.put('/:id',authorization,updateOrder)
router.patch('/:id',authorization,patchOrder)
router.delete('/:id',authorization, deleteOrder)

module.exports = router

