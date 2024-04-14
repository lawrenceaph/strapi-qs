module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'carla'),
			user: env('DATABASE_USERNAME', 'carla'),
			password: env('DATABASE_PASSWORD', 'loveCarla'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
