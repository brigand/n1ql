const parse = require('../lib/')

const result = parse('SELECT * FROM foo where id = "123"')
console.log(result)

const result2 = parse('SELECT */ FROM foo where id = "123"')
console.log(result2)
