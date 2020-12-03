module.exports = {
  dialect: 'sqlite',
  storage: 'src/database/dev.sqlite',
  database: 'lubysoftware',
  define: {
    timestamps: true,
    underscored: true
  },
  logging: console.log
}