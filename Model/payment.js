const db = require('../Helper/db')
module.exports = {

  getDataPaymentByIDModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT*FROM payment WHERE id_payment=${id}`, (err, result, field) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  getDataPaymentModel: (searchKey, searchValue, limit, offset) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM payment WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, field) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  updatePaymentModel: (arr, id) => {
      console.log(arr)
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM payment WHERE id_payment = ${id}`, (_err, result, _field) => {
        if (result.length) {
          db.query(`UPDATE payment SET total_price ='${arr[0]}', status_payment='${arr[1]}'
           WHERE id_payment = ${id}`, (_err, result, _fields) => {
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

  patchPaymentModel: (data, id) => {
    return new Promise((resolve, reject) => {
      var query = `UPDATE payment SET ${data} WHERE id_payment = ${id}`
      db.query(query, (_err, result, _field) => {
        if (!_err) {
          resolve(result)
        } else {
          reject(new Error(_err))
        }
      })
    })
  },

  deletePaymentModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM payment WHERE id_payment=${id}`, (err, result, field) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
