module.exports = (app, data) => {
  app.get('/api/dev/:query', (req, res) => {
    let test = []
    const regex = new RegExp((req.params.query).replace(/\*/g, '.*').replace(/\?/g, '.'))
    console.log(regex)
    for (let i = 0; i < data.length; i++) {
      if (regex.test(data[i].name) === true) {
        test.push(data[i].name)
      }
    }
    res.json(test)
  })
}
