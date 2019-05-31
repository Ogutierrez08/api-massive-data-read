module.exports = (app) => {
  app.get('/api/dev/', (req, res) => {
    res.json('Hello Moto')
  })
}
