

// https://github.com/contentful/contentful-migration/tree/master/examples
module.export = function (migration) {
	const address = migration
		.createContentType('address', {
			name: 'address',
		})
		.displayField('line1');

	address.createField('line1').name('line1').type('Symbol');
	address.createField('line2').name('line2').type('Symbol');
};