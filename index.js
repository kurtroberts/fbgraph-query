var graph = require('fbgraph'),
	argv = require('yargs').argv,
	main = function (creds) {
		graph.setAccessToken(creds);
		graph.setVersion("2.9");
		
		graph.get(argv.query,  function(err, res) {
			console.log(res); 
		});
	};

if (argv.token && argv.query) {
	main(argv.token);
} else {
	console.log('Usage: `node index.js --token <token> --query <query>`');
}