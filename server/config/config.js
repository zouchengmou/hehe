let server = {
	host: '127.0.0.1',
	port: 9000
};

exports.mysqlOptions = {
	host: server.host,
	user: 'root',
	password: '',
	database: 't_username'
}

exports.server = server;