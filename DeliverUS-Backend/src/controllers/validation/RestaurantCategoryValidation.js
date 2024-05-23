import { RestaurantCategory } from '../../models/models.js'
import { check } from 'express-validator'
const maxFileSize = 2000000 // around 2Mb

const checknonDoubleName = async (value,  req ) => {
    try {
      const category = await RestaurantCategory.findOne({where: {name : value}})
      if (category) {
        return Promise.reject(new Error('Ya hay una categoria con ese nombre'))
      } 
      return Promise.resolve()
    } catch (err) {
      return Promise.reject(new Error(err))
    }
  }

const create = [
  check('name').exists().isString().isLength({ min: 1, max: 50 }).trim(),
  check('name').custom((value, { req }) => {
    return checknonDoubleName(req, value)})
]

export { create }
