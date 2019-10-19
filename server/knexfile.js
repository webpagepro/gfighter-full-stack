let connectionString = process.platform === 'win32' ? 'postgres://postgres:xxxxxxxxx@localhost/xxxxxx' : 'postgres://localhost/xxxxxxx'
  
  module.exports = {
    development: {
        client: 'pg',
        connection: {
          database: "",
          host: ""
        },
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
  };
  
