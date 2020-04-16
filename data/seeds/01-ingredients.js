
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'pizza sauce'},
        {id: 2, name: 'cheese'},
        {id: 3, name: 'olive oil'},
        {id: 4, name: 'flour'}
      ]);
    });
};
