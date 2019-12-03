const { Parser } = require("jison");
const fs = require('fs');

const n1ql_l = fs.readFileSync('src/n1ql.l', 'utf-8');
const n1ql_y = fs.readFileSync('src/n1ql.y', 'utf-8');

const parser = new Parser([n1ql_l, n1ql_y].join('\n\n'))
console.log(parser.generate());
