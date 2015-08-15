module.exports = function(){
return [
	    {
	        src:[
	        	'test_data/src/file1.js',
	        	'test_data/src/file2.js',
	    	],
	        dest:'asset.js'
	    },
	    {
	    	src:[
	    		'test_data/src/file3.css',
	    		'test_data/src/file4.css',
	    	],
	    	dest:'test_data/compiled/abc'
	    }
	];
}();