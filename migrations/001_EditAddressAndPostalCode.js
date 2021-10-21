module.export = function (migration) {
	const address = migration.editContentType('address');

	// add postcode
	address.createField('postcode').name('postcode').type('Text');
};