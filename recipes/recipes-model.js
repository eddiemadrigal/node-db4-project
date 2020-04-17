const myKnex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './data/recipes.db3'
  }
})

const db = require('../data/db-config');

module.exports = {
  getRecipes,
  getShoppingList
};

function getRecipes() {
  return db('dishes')
}

function getShoppingList(id) {
  return myKnex('ingredients')
    .join('steps', 'steps.ingredients_id', '=', 'ingredients.id')
    .join('dishes', 'dishes.id', '=', 'steps.dish_id')
    .select('ingredients.name')
    .where({
      'dishes.id': id
    })
}