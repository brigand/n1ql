var { Parser } = require('./n1ql.js');
var ast = require('./ast');

function parse(query) {
  var parser = new Parser();

  parser.yy.logDebugTokens = function() {
    // console.log.apply(this, arguments);
  };
  parser.yy.logDebugGrammar = function() {
    // console.log.apply(this, arguments);
  };

  parser.yy.pStmt = new ast.SelectStatement();
  parser.yy.pStack = [];

  if (!parser.parse(query)) {
    return null;
  }

  const tree = parser.yy.pStmt;
}

module.exports = parse;
