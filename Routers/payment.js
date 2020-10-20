const { Router } = require('express')
const { 
    getDataPaymentByID,getDataPayment,updatePayment,patchPayment,deletePayment
} = require('../Controler/payment')

const router = Router()
const {authorization}=require('../Middleware/auth')

router.get('/:id', getDataPaymentByID)
router.get('/', getDataPayment)
router.put('/:id',authorization,updatePayment)
router.patch('/:id',authorization,patchPayment)
router.delete('/:id',authorization, deletePayment)

module.exports = router

