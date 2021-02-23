module.exports = {
  username: process.env.USERNAME,
  password: '',
  database: process.env.DATABASE,
  host: process.env.HOST,
  dialect: process.env.DIALECT || 'myslq2',
  define: {
    timestamps: true, //atualizar datas automaticamente
  }
}