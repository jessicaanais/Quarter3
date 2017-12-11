
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Category').del()
    .then(function () {
      // Inserts seed entries
      return knex('Category').insert([
        {id: 1, name: 'Motivation'},
        {id: 2, name: 'Relationships'},
        {id: 3, name: 'Confidence'},
        {id: 4, name: 'Family'},
        {id: 5, name: 'Life'}
      ]);
    });
};
