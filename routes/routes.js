module.exports = (app, data) => {
  app.get('/api/dev/:query', (req, res) => {
    let test = []
    let palabras = []
    const regex = new RegExp((req.params.query).replace(/\*/g, '.*').replace(/\?/g, '.'))
    console.log(regex)
    for (let i = 0; i < data.length; i++) {
      palabras = data[i].name.split(' ')
      palabras.map(element => {
        if (regex.test(element) === true) {
          test.push(element)
        }
      })
    }
    res.json(test)
  })
}
