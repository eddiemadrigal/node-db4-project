const myKnex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './data/recipes.db3'
  }
})

const db = require('../data/db-config');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db('dishes')
}

function getShoppingList(id) {
  return myKnex('ingredients')
    .select('ingredients.name')
    .join('steps', 'steps.ingredients_id', '=', 'ingredients.id')
    .join('dishes', 'dishes.id', '=', 'steps.dish_id')
    .where({
      'dishes.id': id
  })
}

/*

select i.name, s.steporder
from dishes as d => myKnex('dishes')
join steps as s on s.dish_id = d.id
join ingredients as i on i.id = s.ingredients_id
where d.id = 1

*/

function getInstructions(id) {
  return myKnex('ingredients')
    .select('ingredients.name')
    .join('steps', 'steps.ingredients_id', '=', 'ingredients.id')
    .join('dishes', 'dishes.id', '=', 'steps.dish_id')
    .where({
      'dishes.id': id
    })
    
}