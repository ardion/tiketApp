const db = require('../Helper/db')
module.exports = {

  getDataOrderByIDModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT*FROM table_order WHERE id_order=${id}`, (err, result, field) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  getDataOrderModel: (searchKey, searchValue, limit, offset) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM table_order WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, field) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  updateOrderModel: (arr, id) => {
      console.log(arr)
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM table_order WHERE id_order = ${id}`, (_err, result, _field) => {
        if (result.length) {
          db.query(`UPDATE table_order SET id_price ='${arr[0]}', order_name='${arr[1]}'
           WHERE id_order = ${id}`, (_err, result, _fields) => {
            if (!_err) {
              resolve(result)
            } else {
              reject(new Error(_err))
            }
          })
        }
      })
    })
  },

  patchOrderModel: (data, id) => {
    return new Promise((resolve, reject) => {
      var query = `UPDATE table_order SET ${data} WHERE id_order = ${id}`
      db.query(query, (_err, result, _field) => {
        if (!_err) {
          resolve(result)
        } else {
          reject(new Error(_err))
        }
      })
    })
  },

  deleteOrderModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM table_order WHERE id_order=${id}`, (err, result, field) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
