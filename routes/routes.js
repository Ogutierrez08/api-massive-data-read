module.exports = (app, data) => {
  app.get('/api/dev/', (req, res) => {
    let query = req.query.query.toUpperCase()
    let test = []
    const regex = new RegExp((query).replace(/\*/g, '.*').replace(/\?/g, '.'))
    console.log(regex)
    for (let i = 0; i < data.length; i++) {
      if (regex.test(data[i].name) === true) {
        test.push(data[i].name)
      }
    }
    res.json(test)
  })
}
