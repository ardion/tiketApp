const {
 getDataOrderByIDModel, getDataOrderModel, updateOrderModel, patchOrderModel,deleteOrderModel
} = require('../Model/order')

require('dotenv')

module.exports = {

  getDataOrderByID: async (req, res) => {
    const { id } = req.params
    try {
      const result = await getDataOrderByIDModel(id)
      res.send({
        success: true,
        message: `Data order id${id}`,
        data: result[0]
      })
    } catch (error) {
      res.send({
        success: false,
        message: `Data order id${id} not found`
      })
    }
  },
  getDataOrder: async (req, res) => {
    let { page, limit, search } = req.query
    let searchKey = ''
    let searchValue = ''
    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.values(search)[0]
    } else {
      searchKey = 'order_name'
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
      const result = await getDataOrderModel(searchKey, searchValue, limit, offset)
      if (result.length) {
        res.send({
          success: true,
          message: 'List Order',
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

  updateOrder: async (req, res) => {
    const id = req.params.id
    const { id_price, order_name } = req.body

    try {
      if (id_price.trim(), order_name.trim()) {
        const result = await updateOrderModel([id_price, order_name], id)
        console.log(result)
        if (result.affectedRows) {
          res.send({
            success: true,
            messages: `order with id ${id} Has Been Updated`
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


  patchOrder: async (req, res) => {
    const id = req.params.id
    const { id_price = '', order_name = '' } = req.body
    try {
      if (id_price.trim() || order_name.trim()) {
        const result = await getDataOrderByIDModel(id)
        const data = Object.entries(req.body).map(item => {
          console.log(item)
          return parseInt(item[1]) > 0 ? `${item[0]}=${item[1]}` : `${item[0]}='${item[1]}'`
        })
        if (result.length) {
          const result2 = await patchOrderModel(data, id)
          if (result2.affectedRows) {
            res.send({
              success: true,
              messages: `order With id ${id} has been Updated`
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
            messages: 'Data order Not Found'
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

  deleteOrder: async (req, res) => {
    const id = req.params.id
    try {
      const result = await getDataOrderByIDModel(id)
      if (result.length) {
        const result2 = await deleteOrderModel(id)
        if (result2.affectedRows) {
          res.send({
            success: true,
            message: `item order id ${id} has been deleted`

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
          message: 'Data order not found!'

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
