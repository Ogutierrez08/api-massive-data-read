const fs = require('fs')
const stream = fs.createReadStream('./data/palabras.txt', { flags: 'r', encoding: 'utf-8' })
let buf = ''
let dataRead = []
module.exports = {
  dataMemory: (onSucess) => {
    stream.on('data', d => {
      buf += d.toString()
      pump()
    })
    console.time('Lectura de datos')
    stream.on('close', () => {
      onSucess(dataRead)
    })
    console.timeEnd('Lectura de datos')
    let pump = () => {
      let pos

      while ((pos = buf.indexOf(',')) >= 0) {
        if (pos === 0) {
          buf = buf.slice(1)
          continue
        }
        processLine(buf.slice(0, pos))
        buf = buf.slice(pos + 1)
      }
    }

    let processLine = (line) => {
      if (line[line.length - 1] === '\r') line = line.substr(0, line.length - 1)

      if (line.length > 0) {
        const obj = JSON.parse(line)
        dataRead.push(obj)
      }
    }
  }

}
