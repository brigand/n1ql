This package allows parsing n1ql into an abstract syntax tree. It will throw an error if the input is invalid.

```sh
npm install @brigand/n1ql

# or

yarn add @brigand/n1ql
```

It simply exports a function that converts the provided query string to an AST.

```js
const parseN1ql = require('@brigand/n1ql');

const ast = parseN1Ql('SELECT * FROM some-table');
```

