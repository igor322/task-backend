module.exports = {
  client: 'postgresql',
    connection: {
      database: 'tasks',
      user:     'postgres',
      password: 'mosquito16'
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
  }

};
