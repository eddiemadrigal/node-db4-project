
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, name: 'Pepperoni Pizza'},
        {id: 2, name: 'Tuna Salad'},
        {id: 3, name: 'Won Ton Soup'}
      ]);
    });
};
