import { get, post, put, destroy } from './helpers/ApiRequestsHelper'
function getAll () {
  return get('users/myrestaurants')
}

function getDetail (id) {
  return get(`restaurants/${id}`)
}

function getRestaurantCategories () {
  return get('restaurantCategories')
}

function create (data) {
  return post('restaurants', data)
}

function update (id, data) {
  return put(`restaurants/${id}`, data)
}

function remove (id) {
  return destroy(`restaurants/${id}`)
}

function createNewRestaurantCategory (data) {
  return post(`restaurantCategories`,data)
}

function promote (id) {
  return patch(`restaurants/${id}/promote`)
}

export { promote, createNewRestaurantCategory, getAll, getDetail, getRestaurantCategories, create, update, remove }
