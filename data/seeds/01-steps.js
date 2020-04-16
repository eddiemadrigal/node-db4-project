
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, dish_id: 1, ingredients_id: 1, amount: '2 oz' }, // pizza sauce
        {id: 2, dish_id: 1, ingredients_id: 2, amount: '4 oz'},  // cheese
        {id: 3, dish_id: 1, ingredients_id: 3, amount: '2 tbl spoons'}, // olive oil
        {id: 4, dish_id: 1, ingredients_id: 4, amount: '5 oz'} // flour
      ]);
    });
};
