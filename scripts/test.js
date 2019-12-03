const {inspect} = require('util')
const {Result} = require('safe-types')
const parse = require('../lib/')

const items = [
  { query: 'SELECT * FROM foo where id = "123"', pass: true},
  { query: 'SELECT */ FROM foo where id = "123"', pass: false},
  { query: 'SELECT * from foo where id = "123"', pass: true},
]

for (const item of items) {
  console.log(`# TEST QUERY: ${inspect(item.query)}`);
  const result = Result.of(() => parse(item.query));
  if (item.pass) {
    result.expect(`Expected PASS for ${inspect(item.query)}`);
  } else {
    result.expect_err(`Expected FAIL for ${inspect(item.query)}`);
  }
}
