// eslint-disable-next-line camelcase
const file_name = '../input/palabras.txt'

const readline = require('readline')
const fs = require('fs')

const lineReader = readline.createInterface({
  input: fs.createReadStream(file_name)
})

let isHeader = false
let columnNames = []

let parseLine = (line) => {
  return line.trim().replace(/,/gi, '').split('\n')
}

let createRowObject = (values) => {
  const rowObject = {}

  columnNames.forEach((value, index) => {
    rowObject[value] = values[index]
  })

  return rowObject
}

let json = {}
json = []

lineReader.on('line', line => {
  if (!isHeader) {
    columnNames = parseLine(line)
    isHeader = true
  } else {
    json.push(createRowObject(parseLine(line)))
  }
})

lineReader.on('close', () => {
  fs.writeFileSync('../data/palabras.txt', JSON.stringify(json, null))
})
