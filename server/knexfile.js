let connectionString = process.platform === 'win32' ? 'postgres://postgres:root@localhost/gfighter' : 'postgres://localhost/gfighter'
  
  module.exports = {
    development: {
        client: 'pg',
        connection: {
          database: "fighters",
          host: "localhost"
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
  