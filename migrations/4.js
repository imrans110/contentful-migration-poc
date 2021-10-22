module.exports = function (migration) {
  const address = migration.editContentType("address");

  // add postcode
  address.createField("suburb").name("suburb").type("Text");
};
