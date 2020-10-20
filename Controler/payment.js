const {
  getDataPaymentByIDModel, getDataPaymentModel, updatePaymentModel, patchPaymentModel, deletePaymentModel
} = require('../Model/payment')

require('dotenv')

module.exports = {

  getDataPaymentByID: async (req, res) => {
    const { id } = req.params
    try {
      const result = await getDataPaymentByIDModel(id)
      res.send({
        success: true,
        message: `Data Payment id${id}`,
        data: result[0]
      })
    } catch (error) {
      res.send({
        success: false,
        message: `Data Payment id${id} not found`
      })
    }
  },
  getDataPayment: async (req, res) => {
    let { page, limit, search } = req.query
    let searchKey = ''
    let searchValue = ''
    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.values(search)[0]
    } else {
      searchKey = 'status_payment'
      searchValue = search || ''
    }

    if (!limit) {
      limit = 10
    } else {
      limit = parseInt(limit)
    }

    if (!page) {
      page = 1
    } else {
      page = parseInt(page)
    }

    const offset = (page - 1) * limit

    try {
      const result = await getDataPaymentModel(searchKey, searchValue, limit, offset)
      if (result.length) {
        res.send({
          success: true,
          message: 'List Payment',
          data: result
        })
      } else {
        res.send({
          success: false,
          message: 'There is no item list'
        })
      }
    } catch (error) {
      console.log(error)
      res.status(500).send({
        success: false,
        message: 'Bad Request'
      })
    }
  },

  updatePayment: async (req, res) => {
    const id = req.params.id
    const { total_price, status_payment } = req.body

    try {
      if (total_price.trim(), status_payment.trim()) {
        const result = await updatePaymentModel([total_price, status_payment], id)
        console.log(result)
        if (result.affectedRows) {
          res.send({
            success: true,
            messages: `Payment with id ${id} Has Been Updated`
          })
        } else {
          res.send({
            success: false,
            messages: 'Field must be filled'
          })
        }
      } else {
        res.send({
          success: false,
          messages: 'Error'
        })
      }
    } catch (error) {
      console.log(error)
      res.status(500).send({
        success: false,
        message: 'Bad Request'
      })
    }
  },
 
  patchPayment: async (req, res) => {
    const id = req.params.id
    const { total_price = '', status_payment = '' } = req.body
    try {
      if (total_price.trim() || status_payment.trim()) {
        const result = await getDataPaymentByIDModel(id)
        const data = Object.entries(req.body).map(item => {
          console.log(item)
          return parseInt(item[1]) > 0 ? `${item[0]}=${item[1]}` : `${item[0]}='${item[1]}'`
        })
        if (result.length) {
          const result2 = await patchPaymentModel(data, id)
          if (result2.affectedRows) {
            res.send({
              success: true,
              messages: `Payment With id ${id} has been Updated`
            })
          } else {
            res.send({
              success: false,
              messages: 'Failed to Update'
            })
          }
        } else {
          res.send({
            success: false,
            messages: 'Data Payment Not Found'
          })
        }
      } else {
        res.send({
          success: false,
          messages: 'Error'
        })
      }
    } catch (error) {
      console.log(error)
      res.status(500).send({
        success: false,
        message: 'Bad Request'
      })
    }
  },

  deletePayment: async (req, res) => {
    const id = req.params.id
    try {
      const result = await getDataPaymentByIDModel(id)
      if (result.length) {
        const result2 = await deletePaymentModel(id)
        if (result2.affectedRows) {
          res.send({
            success: true,
            message: `item Payment id ${id} has been deleted`

          })
        } else {
          res.send({
            success: false,
            message: 'Failed to deleted!'

          })
        }
      } else {
        res.send({
          success: false,
          message: 'Data Payment not found!'

        })
      }
    } catch (error) {
      console.log(error)
      res.status(500).send({
        success: false,
        message: 'Bad Request'
      })
    }
  }
}

