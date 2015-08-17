module.exports = function(){
	return [
		{
            /* ASSET A + B*/
			src: [
                'test_data/src/assets/asset_a.js',
                'test_data/src/assets/asset_b.js'
            ],
            dest: 'test_data/compiled/asset_a_b.min.js'
		},{
            /** ASSET C */
			src:'test_data/src/assets/asset_c.js',
			dest:'test_data/compiled/asset_c.min.js'
		},{
            /* ASSET D + E*/
			src:[
				'test_data/src/assets/asset_d.css',
				'test_data/src/assets/asset_e.css'
			],
			dest:'test_data/compiled/asset_d_e.min.css'
        },{
            src :'test_data/src/assets/asset_f.css',
            dest:'test_data/compiled/asset_f.min.css'
        }
	];
}();