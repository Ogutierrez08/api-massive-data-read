module.exports = (app, data) => {
  app.get('/api/dev/', (req, res) => {
    let test = []
    if (req.query.top !== undefined && req.query.cs !== undefined && req.query.query !== undefined) {
      if (req.query.cs !== '1') {
        const regex = new RegExp('^' + (req.query.query.toUpperCase()).replace(/\*/g, '.*').replace(/\?/g, '.') + '$')
        console.log(regex)
        for (let i = 0; i < data.length; i++) {
          if (regex.test(data[i].name) === true) {
            if (test.length <= req.query.top) {
              test.push(data[i].name)
            } else {
              break
            }
          }
        }
        res.json(test)
      } else {
        const regex = new RegExp('^' + (req.query.query).replace(/\*/g, '.*').replace(/\?/g, '.') + '$')
        console.log(regex)
        for (let i = 0; i < data.length; i++) {
          if (regex.test(data[i].name) === true) {
            if (test.length <= req.query.top) {
              test.push(data[i].name)
            } else {
              break
            }
          }
        }
        res.json(test)
      }
    } else if (req.query.top === undefined && req.query.query !== undefined && req.query.cs !== undefined) {
      if (req.query.cs !== '1') {
        const regex = new RegExp('^' + (req.query.query.toUpperCase()).replace(/\*/g, '.*').replace(/\?/g, '.') + '$')
        console.log(regex)
        for (let i = 0; i < data.length; i++) {
          if (regex.test(data[i].name) === true) {
            test.push(data[i].name)
          }
        }
        res.json(test)
      } else {
        const regex = new RegExp('^' + (req.query.query).replace(/\*/g, '.*').replace(/\?/g, '.') + '$')
        console.log(regex)
        for (let i = 0; i < data.length; i++) {
          if (regex.test(data[i].name) === true) {
            test.push(data[i].name)
          }
        }
        res.json(test)
      }
    } else if (req.query.cs === undefined && req.query.query !== undefined && req.query.top !== undefined) {
      const regex = new RegExp('^' + (req.query.query).replace(/\*/g, '.*').replace(/\?/g, '.') + '$')
      console.log(regex)
      for (let i = 0; i < data.length; i++) {
        if (regex.test(data[i].name) === true) {
          if (test.length <= req.query.top) {
            test.push(data[i].name)
          } else {
            break
          }
        }
      }
      res.json(test)
    } else if (req.query.query !== undefined && req.query.top === undefined && req.query.cs === undefined) {
      const regex = new RegExp('^' + (req.query.query).replace(/\*/g, '.*').replace(/\?/g, '.') + '$')
      console.log(regex)
      for (let i = 0; i < data.length; i++) {
        if (regex.test(data[i].name) === true) {
          test.push(data[i].name)
        }
      }
      res.json(test)
    } else if (req.query.query === undefined) {
      res.json('El parametro query es obligatorio')
    }
  })
}
