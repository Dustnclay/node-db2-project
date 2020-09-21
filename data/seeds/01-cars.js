
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 01000101010, make:'Ford', model:'Bronco', mileage:135000, transmission:'old', title:'clean'},
        {VIN: 01000101011, make:'Ford', model:'Star', mileage:135000, transmission:'old', title:'clean'},
        {VIN: 01000101012, make:'Ford', model:'Cowboy', mileage:135000, transmission:'old', title:'clean'}
      ]);
    });
};
